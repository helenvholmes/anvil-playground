import {
    AnvilProvider,
    Grid,
    Text,
    Tooltip,
} from "@servicetitan/anvil2";

export interface TooltipTriggerProps {
    color: {
        description?: string;
        cssVariable?: string;
        hexCode: string;
        name?: string;
        token?: string;

    };
    showBorders?: boolean;
};

export default function TooltipTrigger({
    color, showBorders,
}: TooltipTriggerProps) {
    const darkGuidance = "Works with white text or background";

    let applyBorders;

    if (showBorders === true) {
        applyBorders = true;
    }

    switch (color.hexCode) {
        case "#FFFFFF":
            applyBorders = true;
            break;
        case "#737475":
            applyBorders = true;
            break;
        case "#F7F7F7":
            applyBorders = true;
            break;
        case "#EEEEEE":
            applyBorders = true;
            break;
        case "#E0F2FF":
            applyBorders = true;
            break;
        case "#FFECE9":
            applyBorders = true;
            break;
        case "#FFF9E3":
            applyBorders = true;
            break;
        default:
            break;
    }

    return (
        <div
            style={{
                backgroundColor:
                    color.cssVariable ?
                        `var(${color.cssVariable})` : color.hexCode
                ,
                boxSizing: "border-box",
                padding: "16px",
                borderColor: applyBorders ? "#DFE0E1" : "transparent",
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
    )
};