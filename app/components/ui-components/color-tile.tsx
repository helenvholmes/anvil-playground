import {
  AnvilProvider,
  Grid,
  Text,
  Tooltip,
  Link,
  Flex,
} from "@servicetitan/anvil2";
import TooltipTrigger, {
  TooltipTriggerProps,
} from "~/app/components/ui-components/tooltip-trigger";

export default function ColorTile({ color, showBorders }: TooltipTriggerProps) {
  return (
    <div>
      <TooltipTrigger color={color} showBorders={showBorders} />
      <Flex gap="2" direction="column">
        <Text variant="body" inline style={{ fontWeight: 700 }}>
          {color.name}
        </Text>
        <Flex gap="4">
          <Text>{color.token}</Text>
          <Text variant="body" subdued>
            {color.hexCode}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

ColorTile.displayName = "ColorTile";
