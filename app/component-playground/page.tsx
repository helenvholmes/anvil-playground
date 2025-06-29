"use client";

import Icon from "~/app/components/ui-components/Icon/Icon";
import { icons } from "~/app/components/ui-components/Icon/icons";

export default function IconTiles() {
  return (
    <div className="flex gap-4 justify-center" style={{ padding: "4rem" }}>
      {icons.map((icon, index) => (
        <Icon iconName={icon.iconName} key={index} />
      ))}
    </div>
  );
}
