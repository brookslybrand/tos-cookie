import type { ComponentProps, VariantProps } from "@stitches/react";

import { styled } from "~/stitches.config";

export type ButtonProps = ComponentProps<typeof Button>;
export type ButtonVariants = VariantProps<typeof Button>;

const Button = styled("button", {
  appearance: "none",
  fontFamily: "$body",
  fontSize: "$1",
  fontWeight: "$semibold",
  cursor: "pointer",
  willChange: "transform",
  transition:
    "transform $1 $ease, box-shadow $1 $ease, background-color $1 $ease, color $1 $ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textDecoration: "none",
  border: "none",
  "&:disabled": {
    pointerEvents: "none !important",
  },
  "&:focus-visible": {
    outline: "2px solid blue",
  },
  variants: {
    appearance: {
      ghost: {
        backgroundColor: "rgba(255, 255, 255, 0)",
      },
      outline: {},
    },
    disabled: {
      true: {
        pointerEvents: "none",
      },
    },
    color: {
      black: {
        backgroundColor: "$black100",
        color: "$white100",
        border: "2px solid $black100",
      },
      darkGray: {
        color: "$white100",
        backgroundColor: "$black90",
        border: "solid 2px $white100",
        "@hover": {
          "&:hover": {
            backgroundColor: "$white100",
            color: "$black100",
            borderColor: "$white100",
          },
        },
      },
      // only used for Disabled buttons
      gray: {
        color: "$black100",
        backgroundColor: "$black10",
      },
      white: {
        backgroundColor: "$white100",
        color: "$black100",
        border: "solid 2px $black10",

        "@hover": {
          "&:hover": {
            backgroundColor: "$black100",
            borderColor: "$black100",
            color: "$white100",
          },
        },
      },
      blue: {
        backgroundColor: "$blue100",
        color: "$white100",
        "@hover": {
          "&:hover": {
            backgroundColor: "$black100",
          },
        },
      },
      green: {
        backgroundColor: "$green10",
        color: "#2D7B55",
      },
      red: {
        backgroundColor: "$red100",
        color: "$white100",
        "@hover": {
          "&:hover": {
            backgroundColor: "$red100",
          },
        },
      },
    },
    size: {
      small: {
        minHeight: 36,
        paddingX: "$2",
        fontSize: "$0",
      },
      regular: {
        minHeight: 46,
        paddingX: "$2",
      },
      medium: {
        height: 52,
        paddingX: "$4",
      },
      large: {
        minHeight: 60,
        paddingX: "$5",
      },
    },
    shape: {
      regular: {
        borderRadius: "$3",
      },
      round: {
        borderRadius: "$round",
      },
    },
    hoverable: {
      true: {
        "@hover": {
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "$1",
          },
          "&:active": {
            transform: "translateY(0)",
            boxShadow: "$0",
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      color: "black",
      appearance: "ghost",
      css: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "$whiteT40",
        "@hover": {
          "&:hover": {
            backgroundColor: "$black100",
            borderColor: "$black100",
            color: "$white100",
          },
        },
      },
    },
    {
      color: "white",
      appearance: "ghost",
      css: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderColor: "rgb(153 153 153 / 20%)",
      },
    },
    {
      color: "black",
      appearance: "outline",
      css: {
        backgroundColor: "transparent",
        color: "$black100",
        border: "2px solid $black100",
        "@hover": {
          "&:hover": {
            backgroundColor: "$black100",
            color: "$white100",
          },
        },
      },
    },
    {
      color: "white",
      disabled: true,
      css: {
        backgroundColor: "$black10",
      },
    },
    {
      color: "darkGray",
      disabled: true,
      css: {
        borderColor: "$black90",
        color: "$black30",
      },
    },
    {
      hoverable: true,
      disabled: true,
      css: {
        pointerEvents: "none",
        "@hover": {
          "&:hover": {
            transform: "unset",
            boxShadow: "unset",
          },
          "&:active": {
            transform: "unset",
            boxShadow: "unset",
          },
        },
      },
    },
  ],
});

export default Button;
