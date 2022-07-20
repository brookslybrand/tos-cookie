import { styled } from "~/stitches.config";
import UnstyledLink from "~/components/base/UnstyledLink";

import type { ComponentProps, VariantProps } from "@stitches/react";

type LinkProps = ComponentProps<typeof Link>;
type LinkVariants = VariantProps<typeof Link>;

const Link = styled(UnstyledLink, {
  textDecoration: "none",
  transition: "color $1 $ease, opacity $1 $ease, outline $1 $ease",
  "&:focus-visible": {
    outline: "4px solid $blackT30",
    outlineOffset: "4px",
    borderRadius: "$2",
  },
  variants: {
    isDark: {
      true: {},
    },
    variant: {
      primary: {
        color: "$black70",
        "@hover": {
          "&:hover": {
            color: "$black100",
          },
        },
      },
      strong: {
        color: "$black100",
        "@hover": {
          "&:hover": {
            color: "$black70",
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      isDark: true,
      variant: "primary",
      css: {
        color: "$black30",
        "@hover": {
          "&:hover": {
            color: "$white100",
          },
        },
      },
    },
    {
      isDark: true,
      variant: "strong",
      css: {
        color: "$white100",
        "@hover": {
          "&:hover": {
            color: "$black30",
          },
        },
      },
    },
  ],
});

export type { LinkProps, LinkVariants };
export default Link;
