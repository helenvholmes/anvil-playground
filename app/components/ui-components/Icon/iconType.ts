import { defineField } from "sanity";

import { icons } from "./icons";

const iconNames: string[] = [];

icons.forEach((icon) => {
  iconNames.push(icon.iconName);
});

export const iconType = defineField({
  description: "Sets an icon",
  fields: [
    {
      description: "Sets an icon",
      name: "iconName",
      options: {
        list: iconNames,
      },
      type: "string",
    },
  ],
  name: "icon",
  title: "icon",
  type: "document",
});
