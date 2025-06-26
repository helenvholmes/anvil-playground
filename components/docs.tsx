function BackgroundColorTiles() {
  const darkGuidance = "Works with white text or background";
  const lightGuidance = "Works with black text or background";

  function componentToHex(c: { toString: (arg0: number) => any }) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(values: [r: string, g: string, b: string]) {
    const [r, g, b] = values;
    return (
      "#" +
      componentToHex(Number(r)) +
      componentToHex(Number(g)) +
      componentToHex(Number(b))
    );
  }

  const combinedRef = React.useRef<HTMLDivElement>(null);
  const [colorString, setColorString] = useState("");

  const convertRGBString = (originalString: string) => {
    if (
      !combinedRef ||
      !(combinedRef as React.RefObject<HTMLDivElement>).current
    )
      return [];
    const backgroundColor = getComputedStyle(
      (combinedRef as React.RefObject<HTMLDivElement>).current!
    ).backgroundColor;
    let trimmedString = backgroundColor
      .replaceAll(",", "")
      .replaceAll("rgb(", "")
      .replaceAll(")", "");
    const values = trimmedString.split(" ");
    return values;
  };

  useEffect(() => {
    if (combinedRef.current) {
      const backgroundColor = getComputedStyle(
        combinedRef.current
      ).backgroundColor;
      const convertedString = convertRGBString(backgroundColor) as [
        string,
        string,
        string
      ];
      const hexCode = rgbToHex(convertedString);
      setColorString(hexCode);
    }
  }, []); // Runs when color changes

  const colors = {
    backgroundColors: {
      default: {
        name: "Default",
        token: "Background/Color/Default",
        hexCode: "#FFFFFF",
        cssVariable: "--colorsSurfaceDefault",
        description: lightGuidance,
      },
      inverted: {
        name: "Inverted",
        token: "Background/Color/Inverted",
        hexCode: "#2D2E31",
        cssVariable: "--colorsSurfaceInverted",
        description: darkGuidance,
      },
      invertedStrong: {
        name: "Inverted-Strong",
        token: "Background/Color/Inverted-Strong",
        hexCode: "#141414",
        cssVariable: "--colorsSurfaceInvertedStrong",
        description: darkGuidance,
      },
      strong: {
        name: "Strong",
        token: "Background/Color/Strong",
        hexCode: "#F7F7F7",
        cssVariable: "--colorsSurfaceGreySubdued",
        description: lightGuidance,
      },
      stronger: {
        name: "Stronger",
        token: "Background/Color/Stronger",
        hexCode: "#F7F7F7",
        cssVariable: "--colorsSurfaceGreySubdued",
        description: lightGuidance,
      },
      strongest: {
        name: "Strongest",
        token: "Background/Color/Strongest",
        hexCode: "#EEEEEE",
        cssVariable: "--colorsSurfaceGrey",
        description: lightGuidance,
      },
      primary: {
        name: "Primary",
        token: "Background/Color/Primary",
        hexCode: "#0265DC",
        cssVariable: "--colorsSurfacePrimary",
        description: darkGuidance,
      },
      primarySubdued: {
        name: "Primary Subdued",
        token: "Background/Color/Primary-Subdued",
        hexCode: "#E0F2FF",
        cssVariable: "--colorsSurfacePrimarySubdued",
        description: lightGuidance,
      },
      danger: {
        name: "Danger",
        token: "Background/Color/Danger",
        hexCode: "#E13212",
        cssVariable: "--colorsSurfaceCritical",
        description: darkGuidance,
      },
      dangerSubdued: {
        name: "Danger Subdued",
        token: "Background/Color/Danger-Subdued",
        hexCode: "#FFECE9",
        cssVariable: "--colorsSurfaceCriticalSubdued",
        description: lightGuidance,
      },
      warning: {
        name: "Warning",
        token: "Background/Color/Warning",
        hexCode: "#FFBE00",
        cssVariable: "--colorsStatusWarning",
        description: lightGuidance,
      },
      warningSubdued: {
        name: "Warning Subdued",
        token: "Background/Color/Warning-Subdued",
        hexCode: "#FFF9E3",
        cssVariable: "--colorsSurfaceWarningSubdued",
        description: lightGuidance,
      },
      disabled: {
        name: "Disabled",
        token: "Background/Color/Disabled",
        hexCode: "#606162",
        cssVariable: "--colorsSurfaceDisabled",
        description: darkGuidance,
      },
    },
  };

  type TooltipTriggerProps = {
    color: {
      cssVariable: string;
      description?: string;
      hexCode: string;
      name: string;
      token: string;
    };
    onChange: (data: string) => void;
  };

  const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
    ({ color, onChange }, ref) => {
      const [colorString, setColorString] = useState("");

      const convertRGBString = (originalString: string) => {
        if (
          !combinedRef ||
          !(combinedRef as React.RefObject<HTMLDivElement>).current
        )
          return [];
        const backgroundColor = getComputedStyle(
          (combinedRef as React.RefObject<HTMLDivElement>).current!
        ).backgroundColor;
        let trimmedString = backgroundColor
          .replaceAll(",", "")
          .replaceAll("rgb(", "")
          .replaceAll(")", "");
        const values = trimmedString.split(" ");
        return values;
      };

      useEffect(() => {
        if (combinedRef.current) {
          const backgroundColor = getComputedStyle(
            combinedRef.current
          ).backgroundColor;
          const convertedString = convertRGBString(backgroundColor) as [
            string,
            string,
            string
          ];
          const hexCode = rgbToHex(convertedString);
          setColorString(hexCode);
          onChange(hexCode); // Send data to parent
        }
      }, [color]); // Runs when color changes

      return (
        <div
          style={{
            backgroundColor: color.cssVariable
              ? `var(${color.cssVariable})`
              : color.hexCode,
            boxSizing: "border-box",
            padding: "16px",
            borderColor: "var(--border-color)",
            width: "100%",
            height: "140px",
            borderRadius: "12px",
            marginBottom: "16px",
            borderWidth: "1px",
            borderStyle: "solid",
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "start",
          }}
          ref={combinedRef as React.RefObject<HTMLDivElement>}
        >
          {color.description && (
            <Tooltip>
              <Tooltip.Trigger>
                <div
                  style={{
                    borderRadius: "100%",
                    width: "24px",
                    height: "24px",
                    backgroundColor:
                      color.description === darkGuidance ? "white" : "black",
                  }}
                />
              </Tooltip.Trigger>
              <Tooltip.Content>{color.description}</Tooltip.Content>
            </Tooltip>
          )}
        </div>
      );
    }
  );

  type CardLockupProps = {
    color: {
      cssVariable: string;
      description?: string;
      hexCode: string;
      name: string;
      token: string;
    };
    onChange?: (data: string) => void;
  };

  function ColorTile({ color, id }: ColorTileProps) {
    const [childData, setChildData] = useState<string>("");

    // Function to update state from child
    const handleDataFromChild = (data: string) => {
      setChildData(data);
    };

    return (
      <div>
        <TooltipTrigger color={color} onChange={handleDataFromChild} />
        <Flex gap="2" direction="column">
          <Text variant="body" inline style={{ fontWeight: 700 }}>
            {color.name}
          </Text>
          <Flex gap="4">
            <Text>{color.token}</Text>
            <Text variant="body" subdued style={{ textTransform: "uppercase" }}>
              {childData}
            </Text>
          </Flex>
        </Flex>
      </div>
    );
  }

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="4">
      {Object.entries(colors.backgroundColors).map(([key, color]) => (
        <ColorTile key={key} color={color} />
      ))}
    </Grid>
  );
}

render(<BackgroundColorTiles />);
