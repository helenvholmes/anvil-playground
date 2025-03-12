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

export default function ForegroundColorTiles() {
  const darkGuidance = "Works with white text or background";
  const lightGuidance = "Works with black text or background";

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
        Blues
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.blues).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Neutrals
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.neutrals).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Reds
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.reds).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Yellows
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.yellows).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Green
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.greens).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Blue Grey
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.bluegreys).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Orange
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.oranges).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Cyan
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.cyans).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Purple
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.purples).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
        Magenta
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          {Object.entries(colors.magentas).map(([key, color]) => (
            <ColorTile key={key} color={color} />
          ))}
        </Grid>
      </div>
    </AnvilProvider>
  );
}
