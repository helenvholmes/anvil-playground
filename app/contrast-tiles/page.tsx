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
import colors from "~/app/components/colors";

export default function ContrastTiles() {
  const colors = {
    1: {
      description: "Black on white",
      foreground: "--colorsTextDefault",
      background: "--background",
    },
    2: {
      description: "Foreground/subdued on white",
      foreground: "#737475",
      background: "--background",
    },
    3: {
      description: "White on background/primary",
      foreground: "--colorsTextOnPrimary",
      background: "--colorsSurfacePrimary",
    },
  };

  return (
    <AnvilProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "1rem",
          margin: "auto",
          minWidth: "600px",
          maxWidth: "800px",
          overflowX: "scroll",
        }}
      >
        <Link href="/">Back</Link>
        <Flex gap="8">
          {Object.entries(colors).map(([key, color]) => (
            <Flex key={key} gap="3" direction="column">
              <div
                style={{
                  borderColor: "var(--colorsBorderGrey)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "3px",
                  padding: "24px",
                }}
              >
                <Flex gap="3" direction="column">
                  <div
                    style={{
                      backgroundColor: `var(${color.foreground})`,
                      height: "12px",
                      width: "62%",
                      borderRadius: "3px",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: `var(${color.foreground})`,
                      height: "12px",
                      width: "100%",
                      borderRadius: "3px",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: `var(${color.foreground})`,
                      height: "12px",
                      width: "100%",
                      borderRadius: "3px",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: `var(${color.foreground})`,
                      height: "12px",
                      width: "100%",
                      borderRadius: "3px",
                    }}
                  ></div>
                </Flex>
                {color.background} {color.foreground}
              </div>
              <Text>{color.description}</Text>
            </Flex>
          ))}
        </Flex>
      </div>
    </AnvilProvider>
  );
}
