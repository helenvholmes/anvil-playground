"use client";
import {
  AnvilProvider,
  Grid,
  Text,
  Tooltip,
  Link,
  Flex,
} from "@servicetitan/anvil2";
import ColorTile from "~/app/components/ui-components/color-tile";

export default function ForegroundColorTiles() {
  const darkGuidance = "Works with white text or background";
  const lightGuidance = "Works with black text or background";

  const colors = {
    foregroundColors: {
      default: {
        name: "Default",
        token: "Foreground/Color/Default",
        hexCode: "#141414",
        cssVariable: "--foreground-color",
        description: darkGuidance,
      },
      primary: {
        name: "Primary",
        token: "Foreground/Color/Primary",
        hexCode: "#0265DC",
        cssVariable: "--foreground-color-primary",
        description: darkGuidance,
      },
      subdued: {
        name: "Subdued",
        token: "Foreground/Color/Subdued",
        hexCode: "#737475",
        cssVariable: "--foreground-color-subdued",
        description: darkGuidance,
      },
      danger: {
        name: "Danger",
        token: "Foreground/Color/Danger",
        hexCode: "#E13212",
        cssVariable: "--foreground-color-danger",
        description: darkGuidance,
      },
      inverted: {
        name: "Inverted",
        token: "Foreground/Color/Inverted",
        hexCode: "#FFFFFF",
        cssVariable: "--foreground-color-inverted",
        description: lightGuidance,
      },
      onPrimary: {
        name: "On-Primary",
        token: "Foreground/Color/On-Primary",
        hexCode: "#FFFFFF",
        cssVariable: "--foreground-color-on-primary",
        description: lightGuidance,
      },
      onDanger: {
        name: "On-Danger",
        token: "Foreground/Color/On-Danger",
        hexCode: "#737475",
        cssVariable: "--foreground-color-on-danger",
        description: darkGuidance,
      },
      onWarning: {
        name: "On-Warning",
        token: "Foreground/Color/On-Warning",
        hexCode: "#141414",
        cssVariable: "--foreground-color-on-warning",
        description: darkGuidance,
      },
    },
    backgroundColors: {
      default: {
        name: "Default",
        token: "Background/Color/Default",
        hexCode: "#FFFFFF",
        cssVariable: "--background-color",
        description: lightGuidance,
      },
      inverted: {
        name: "Inverted",
        token: "Background/Color/Inverted",
        hexCode: "#2D2E31",
        cssVariable: "--background-color-inverted",
        description: darkGuidance,
      },
      invertedStrong: {
        name: "Inverted-Strong",
        token: "Background/Color/Inverted-Strong",
        hexCode: "#141414",
        cssVariable: "--background-color-inverted-strong",
        description: darkGuidance,
      },
      strong: {
        name: "Strong",
        token: "Background/Color/Strong",
        hexCode: "#F7F7F7",
        cssVariable: "--background-color-strong",
        description: lightGuidance,
      },
      stronger: {
        name: "Stronger",
        token: "Background/Color/Stronger",
        hexCode: "#F7F7F7",
        cssVariable: "--background-color-stronger",
        description: lightGuidance,
      },
      strongest: {
        name: "Strongest",
        token: "Background/Color/Strongest",
        hexCode: "#EEEEEE",
        cssVariable: "--background-color-strongest",
        description: lightGuidance,
      },
      primary: {
        name: "Primary",
        token: "Background/Color/Primary",
        hexCode: "#0265DC",
        cssVariable: "--background-color-primary",
        description: darkGuidance,
      },
      primarySubdued: {
        name: "Primary Subdued",
        token: "Background/Color/Primary-Subdued",
        hexCode: "#E0F2FF",
        cssVariable: "--background-color-primary-subdued",
        description: lightGuidance,
      },
      danger: {
        name: "Danger",
        token: "Background/Color/Danger",
        hexCode: "#E13212",
        cssVariable: "--background-color-danger",
        description: darkGuidance,
      },
      dangerSubdued: {
        name: "Danger Subdued",
        token: "Background/Color/Danger-Subdued",
        hexCode: "#FFECE9",
        cssVariable: "--background-color-danger-subdued",
        description: lightGuidance,
      },
      warning: {
        name: "Warning",
        token: "Background/Color/Warning",
        hexCode: "#FFBE00",
        cssVariable: "--background-color-warning",
        description: lightGuidance,
      },
      warningSubdued: {
        name: "Warning Subdued",
        token: "Background/Color/Warning-Subdued",
        hexCode: "#FFF9E3",
        cssVariable: "--background-color-warning-subdued",
        description: lightGuidance,
      },
      disabled: {
        name: "Disabled",
        token: "Background/Color/Disabled",
        hexCode: "#606162",
        cssVariable: "--background-color-disabled",
        description: darkGuidance,
      },
    },
    borderColors: {
      default: {
        name: "Default",
        token: "Border/Color/Default",
        hexCode: "#949596",
        cssVariable: "--border-color",
      },
      strong: {
        name: "Strong",
        token: "Border/Color/Strong",
        hexCode: "#444445",
        cssVariable: "--border-color-strong",
      },
      primary: {
        name: "Primary",
        token: "Border/Color/Primary",
        hexCode: "#0265DC",
        cssVariable: "--border-color-primary",
      },
      danger: {
        name: "Danger",
        token: "Border/Color/Danger",
        hexCode: "#E13212",
        cssVariable: "--border-color-danger",
      },
      subdued: {
        name: "Subdued",
        token: "Border/Color/Subdued",
        hexCode: "#DFE0E1",
        cssVariable: "--border-color-subdued",
        description: "Works with black text or background",
      },
    },
    statusColors: {
      info: {
        name: "Info",
        token: "Status/Color/Info",
        hexCode: "#0265DC",
        cssVariable: "--status-color-info",
        description: "Works with white text or background",
      },
      danger: {
        name: "Danger",
        token: "Status/Color/Danger",
        hexCode: "#E13212",
        cssVariable: "--status-color-danger",
        description: "Works with white text or background",
      },
      success: {
        name: "Success",
        token: "Status/Color/Success",
        hexCode: "#007A4D",
        cssVariable: "--status-color-success",
        description: "Works with white text or background",
      },
      warning: {
        name: "Warning",
        token: "Status/Color/Warning",
        hexCode: "#FFBE00",
        cssVariable: "--status-color-warning",
        description: "Works with black text or background",
      },
    },
  };

  return (
    <AnvilProvider>
      <div
        style={{
          margin: "auto",
          minWidth: "600px",
          maxWidth: "800px",
          overflowX: "scroll",
        }}
      >
        <Flex gap="4" direction="column">
          <Link href="/">Back</Link>
          <Text>Foreground colors</Text>
          <Grid templateColumns="repeat(2, 1fr)" gap="8">
            {Object.entries(colors.foregroundColors).map(([key, color]) => (
              <ColorTile key={key} color={color} id={color.name} />
            ))}
          </Grid>
          Background colors
          <Grid templateColumns="repeat(2, 1fr)" gap="8">
            {Object.entries(colors.backgroundColors).map(([key, color]) => (
              <ColorTile key={key} color={color} />
            ))}
          </Grid>
          Border colors
          <Grid templateColumns="repeat(2, 1fr)" gap="8">
            {Object.entries(colors.borderColors).map(([key, color]) => (
              <ColorTile key={key} color={color} />
            ))}
          </Grid>
          Status colors
          <Grid templateColumns="repeat(2, 1fr)" gap="8">
            {Object.entries(colors.statusColors).map(([key, color]) => (
              <ColorTile key={key} color={color} />
            ))}
          </Grid>
        </Flex>
      </div>
    </AnvilProvider>
  );
}
