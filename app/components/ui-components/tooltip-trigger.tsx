import { AnvilProvider, Grid, Text, Tooltip } from "@servicetitan/anvil2";

export interface TooltipTriggerProps {
  color: {
    description?: string;
    cssVariable?: string;
    hexCode: string;
    name?: string;
    token?: string;
  };
}

export default function TooltipTrigger({ color }: TooltipTriggerProps) {
  const darkGuidance = "Works with white text or background";

  return (
    <div
      style={{
        backgroundColor: color.cssVariable
          ? `var(${color.cssVariable})`
          : color.hexCode,
        boxSizing: "border-box",
        padding: "16px",
        borderColor: "var(--border-color)",
        width: "75%",
        height: "140px",
        borderRadius: "12px",
        marginBottom: "16px",
        borderWidth: "1px",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "start",
      }}
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
