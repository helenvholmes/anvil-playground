interface UniversalComponentProps {
  /** When `true`, enables a gradient background for the component. */
  backgroundEnabled?: boolean;
  /** Passes children to the component. */
  children?: React.ReactNode;
  /** Applies the classNames to the containing div of the component. **/
  className?: string;
  colors?: Object;
  /** Sets an id for the component. */
  id?: string;
  /** Sets the tailwind theme for the components. */
  localTheme?: "salient" | "spotlight";
  /** Sets the local variant for the component. Defaults to `theme--light`. */
  localVariant?: "variant--light" | "variant--dark" | "variant--alt";
  /** Passes portable text from a CMS to the component. */
  portableTextField?: PortableTextBlock[];
  /** The theme the user has set via their system settings. */
  systemTheme?: "light" | "dark";
}
