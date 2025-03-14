"use client";
import {
  AnvilProvider,
  Grid,
  Text,
  Tooltip,
  Chip,
  Link,
  Flex,
} from "@servicetitan/anvil2";
import ColorTile from "~/app/components/ui-components/color-tile";
import colors from "~/app/components/colors";

export default function ContrastTiles() {
  const passGuidelines = {
    1: {
      description: "Black on white",
      foreground: "--foreground-color",
      background: "--background-color",
    },
    2: {
      description: "Foreground/subdued on white",
      foreground: "--foreground-color-subdued",
      background: "--background-color",
    },
    3: {
      description: "White on background/primary",
      foreground: "--foreground-color-inverted",
      background: "--status-color-info",
    },
  };

  const failGuidelines = {
    1: {
      description: "Foreground/subdued on background/strong",
      foreground: "--foreground-color-subdued",
      background: "--background-color-strong",
    },
    2: {
      description: "White on Background/warning",
      foreground: "--foreground-color-inverted",
      background: "--background-color-warning",
    },
    3: {
      description: "Foreground/default on background/Danger",
      foreground: "--foreground-color",
      background: "--status-color-danger",
    },
    4: {
      description: "Foreground/default on background/primary",
      foreground: "--foreground-color",
      background: "--status-color-info",
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
          overflowX: "scroll",
        }}
      >
        <Link href="/">Back</Link>
        <Chip
          label="Do this: Color combinations that pass AA guidelines"
          color="#CEF8E0"
        />
        <Grid gap="8" templateColumns="repeat(auto-fit, minmax(186px, 1fr))">
          {Object.entries(passGuidelines).map(([key, color]) => (
            <Flex key={key} gap="3" direction="column">
              <div
                style={{
                  backgroundColor: `var(${color.background})`,
                  borderColor: "var(--border-color)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "12px",
                  padding: "24px",
                  width: "100%",
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
              </div>
              <Text variant="eyebrow">{color.description}</Text>
            </Flex>
          ))}
        </Grid>
        <Chip
          label="Don’t do this: Color combinations that fail AA guidelines"
          color="#FFECE9"
        />
        <Grid gap="8" templateColumns="repeat(auto-fit, minmax(186px, 1fr))">
          {Object.entries(failGuidelines).map(([key, color]) => (
            <Flex key={key} gap="3" direction="column">
              <div
                style={{
                  backgroundColor: `var(${color.background})`,
                  borderColor: "var(--border-color)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderRadius: "12px",
                  padding: "24px",
                  width: "100%",
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
              </div>
              <Text variant="eyebrow">{color.description}</Text>
            </Flex>
          ))}
        </Grid>
      </div>
    </AnvilProvider>
  );
}
