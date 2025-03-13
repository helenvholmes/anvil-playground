import { forwardRef, useEffect, useRef, useState } from "react";
import { AnvilProvider, Grid, Text, Tooltip } from "@servicetitan/anvil2";
import rgbToHex from "~/app/components/utils/rgbToHex";

export interface TooltipTriggerProps {
  color: {
    description?: string;
    cssVariable?: string;
    hexCode: string;
    name?: string;
    token?: string;
  };
  sendDataToParent: (data: string) => void;
}

const TooltipTrigger = forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ color, sendDataToParent }, ref) => {
    const darkGuidance = "Works with white text or background";
    const combinedRef = useRef<HTMLDivElement>(null);
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
        sendDataToParent(hexCode); // Send data to parent
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

export default TooltipTrigger;
