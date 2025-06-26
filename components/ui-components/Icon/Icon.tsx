import clsx from "clsx";

import { icons } from "./icons";

type IconName = (typeof icons)[number]["iconName"];

export interface IconProps extends UniversalComponentProps {
  /** Allows you to pass fill data to the `path` element. */
  fill?: string;

  /** Maps to the keys in `icons.ts`. */
  iconName?: IconName;

  /** When `true`, sets the theme inverse for icon fill. */
  inverse?: boolean;

  /** Sets the width and height of the icon. */
  size?: "small" | "medium";
}

export default function Icon({
  children,
  className,
  fill,
  iconName,
  inverse,
  size = "medium",
}: IconProps) {
  let paths;

  for (var i = 0; i < icons.length; i++) {
    if (iconName === icons[i].iconName) {
      paths = icons[i].paths;
    }
  }

  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={clsx(
        size === "medium" && "h-6 w-6",
        size === "small" && "h-4 w-4",
        inverse ? "fill-default-icon-inverse" : "fill-default-icon-regular",
        className
      )}
    >
      {paths &&
        paths.map((path, index) => (
          <path d={path} key={index} fill={fill && fill}></path>
        ))}
      {children}
    </svg>
  );
}

Icon.displayName = "Icon";
