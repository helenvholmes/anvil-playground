// "use client";

// import clsx from "clsx";
// import Link from "next/link";

// import Button, { ButtonProps } from "~/components/Button/Button";
// import Icon, { IconProps } from "~/app/components/ui-components/Icon/Icon";

// // import {
// //   analyticsTrackClick,
// //   ClickDataProps,
// //   createTrackingEventName,
// // } from "~/lib/analytics";

// export interface ClickableProps extends ButtonProps {
//   /** Sets an `aria-label` for the link. */
//   ariaLabel?: string;
//   /** Determines what type of markup is generated. */
//   clickableType?: "internal" | "external" | "button";
//   /** Sets a custom event name for the analytics handler. */
//   // customEventName?: string;
//   /** Adds an icon after children. */
//   endIcon?: IconProps;
//   /** Sets a `href` for `a` elements. */
//   href?: string;
//   /** Sets an `id` for the element. */
//   id?: string;
//   /** When `true`, sets the styling to be inverted from the default. */
//   inverted?: boolean;
//   /** Sets the click action for `button` type clickables. */
//   // onClick?: idkhowtotypehtis
//   /** When `true`, opens item in a new tab. */
//   openInNewTab?: boolean;
//   /** When `true`, adds padding around button. */
//   padding?: boolean;
//   /** Adds an icon before children. */
//   startIcon?: IconProps;
//   /** When `true`, unsets all classNames. */
//   unstyled?: boolean;
// }

// /** Used for any clickable item. [Documentation]() */
// export default function Clickable({
//   ariaLabel,
//   buttonSize = "default",
//   children,
//   className,
//   clickableType,
//   endIcon,
//   href,
//   id,
//   inverted,
//   localVariant,
//   openInNewTab,
//   padding = true,
//   startIcon,
//   type,
//   unstyled,
//   variant = "default",
//   ...props
// }: ClickableProps) {
//   /**
//    *
//    * handleAnalyticsTrack = () => {
//    * // handle it here, data is ClickDataProps = {
//    *  destination_url,
//    * link_text,
//    * origin_url,
//    * ...onClickData,
//    * }
//    * }
//    *
//    * analyticsTrackClick(data, eventName);
//    *
//    * handleLInkClick e.preventDefault, handleAnalyticsTrack, onClick && onClick*event), if openInNewTabe window.open(href) else router.push(href)
//    *
//    * handleButtonClick prevent default, handleAnalytirics, run onClick
//    */

//   const renderClickableChildren = (variant?: string) => {
//     return unstyled ? (
//       <>
//         {startIcon && <Icon {...startIcon} inverse={variant === "default"} />}
//         {children}
//         {endIcon && <Icon {...endIcon} inverse={variant === "default"} />}
//       </>
//     ) : (
//       <span className={clsx("flex items-center gap-2")}>
//         {startIcon && <Icon {...startIcon} inverse={variant === "default"} />}
//         {children}
//         {endIcon && <Icon {...endIcon} inverse={variant === "default"} />}
//       </span>
//     );
//   };

//   const classNames = clsx(
//     localVariant,
//     !unstyled &&
//       "group/button transition-colors rounded-full inline-flex items-center justify-center",
//     !unstyled && padding && "px-4 py-2",
//     !unstyled && buttonSize === "default" ? "text-sm" : "text-xs",
//     !unstyled &&
//       variant === "default" &&
//       "font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-default-action-bg--default hover:bg-default-action-bg--hover active:bg-default-action-bg--active text-default-action-text--default hover:text-default-action-text--hover active:text-default-action-text--active",
//     !unstyled &&
//       variant === "stroked" &&
//       "border focus:outline-none bg-stroked-action-bg--default border-stroked-action-border--default hover:bg-stroked-action-bg--hover hover:border-stroked-action-border--hover active:border-stroked-action-border--active active:bg-stroked-action-bg--active text-stroked-action-text--default hover:text-stroked-action-text--hover active:text-stroked-action-text--active",
//     !unstyled &&
//       inverted &&
//       "font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-inverse-action-bg--default hover:bg-inverse-action-bg--hover active:bg-inverse-action-bg--active text-inverse-action-text--default hover:text-inverse-action-text--hover active:text-inverse-action-text--active",
//     className
//   );

//   if (href && clickableType === "external") {
//     return (
//       <a
//         className={classNames}
//         href={href}
//         id={id}
//         target={openInNewTab ? "_blank" : "_self"}
//       >
//         {renderClickableChildren()}
//       </a>
//     );
//   }

//   if (href && clickableType === "internal") {
//     <Link
//       className={classNames}
//       href={href}
//       id={id}
//       target={openInNewTab ? "_blank" : "null"}
//     >
//       {renderClickableChildren()}
//     </Link>;
//   }

//   return (
//     <Button
//       aria-label={ariaLabel}
//       className={classNames}
//       id={id}
//       variant={variant}
//       {...props}
//     >
//       {renderClickableChildren(variant)}
//     </Button>
//   );
// }

// Clickable.displayName = "Clickable";
