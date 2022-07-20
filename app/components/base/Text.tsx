import { styled } from "~/stitches.config";
import type { ComponentProps, VariantProps } from "@stitches/react";

type TextProps = ComponentProps<typeof Text>;
type TextVariants = VariantProps<typeof Text>;

const Text = styled("div", {
  variants: {
    size: {
      0: { fontSize: "$0", letterSpacing: "$0" },
      1: { fontSize: "$1", letterSpacing: "$1" },
      2: { fontSize: "$2", letterSpacing: "$2" },
      3: { fontSize: "$3", letterSpacing: "$3" },
      4: { fontSize: "$4", letterSpacing: "$4" },
      5: { fontSize: "$5", letterSpacing: "$5" },
      6: { fontSize: "$6", letterSpacing: "$6" },
      7: { fontSize: "$7", letterSpacing: "$7" },
      8: { fontSize: "$8", letterSpacing: "$8" },
      9: { fontSize: "$9", letterSpacing: "$9" },
      10: { fontSize: "$10", letterSpacing: "$10" },
    },
    weight: {
      regular: { fontWeight: "$regular" },
      medium: { fontWeight: "$medium" },
      semibold: { fontWeight: "$semibold" },
      heading: { fontWeight: "$heading" },
      body: { fontWeight: "$body" },
    },
    color: {
      rainbow: {
        background:
          "linear-gradient(110.78deg, #76E650 -1.13%, #F9D649 15.22%, #F08E35 32.09%, #EC5157 48.96%, #FF18BD 67.94%, #1A4BFF 85.34%, #62D8F9 99.57%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },
    ellipsis: {
      true: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      },
    },
  },
});

export type { TextProps, TextVariants };
export default Text;
