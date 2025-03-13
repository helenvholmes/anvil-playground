import {
  AnvilProvider,
  Grid,
  Text,
  Tooltip,
  Link,
  Flex,
} from "@servicetitan/anvil2";
import { useState } from "react";
import TooltipTrigger, {
  TooltipTriggerProps,
} from "~/app/components/ui-components/tooltip-trigger";

interface ColorTileProps extends Omit<TooltipTriggerProps, "sendDataToParent"> {
  id?: string;
  sendDataToParent?: (data: string) => void;
}

export default function ColorTile({ color, id }: ColorTileProps) {
  const [childData, setChildData] = useState<string>("");

  // Function to update state from child
  const handleDataFromChild = (data: string) => {
    setChildData(data);
  };

  return (
    <div id={id}>
      <TooltipTrigger color={color} sendDataToParent={handleDataFromChild} />
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

ColorTile.displayName = "ColorTile";
