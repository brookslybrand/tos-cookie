import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const avatarScale = {
  0: 24,
  1: 32,
  2: 44,
};

const stitches = createStitches({
  theme: {
    colors: {
      white100: "#FFFFFF",

      black100: "#000000",
      black95: "#0D0D0D",
      black90: "#1A1A1A",
      black80: "#333333",
      black70: "#4D4D4D",
      black60: "#666666",
      black50: "#7F7F7F",
      black40: "#999999",
      black30: "#B3B3B3",
      black20: "#CCCCCC",
      black10: "#E6E6E6",
      black5: "#F2F2F2",
      black0: "$white100",

      // T stands for transparency
      blackT5: "rgba(0, 0, 0, 0.05)",
      blackT10: "rgba(0, 0, 0, 0.1)",
      blackT15: "rgba(0, 0, 0, 0.15)",
      blackT20: "rgba(0, 0, 0, 0.2)",
      blackT25: "rgba(0, 0, 0, 0.25)",
      blackT30: "rgba(0, 0, 0, 0.3)",
      blackT35: "rgba(0, 0, 0, 0.35)",
      blackT40: "rgba(0, 0, 0, 0.4)",
      blackT45: "rgba(0, 0, 0, 0.45)",
      blackT50: "rgba(0, 0, 0, 0.5)",
      blackT60: "rgba(0, 0, 0, 0.6)",
      blackT70: "rgba(0, 0, 0, 0.7)",
      blackT80: "rgba(0, 0, 0, 0.8)",
      blackT90: "rgba(0, 0, 0, 0.9)",

      whiteT5: "rgba(255, 255, 255, 0.05)",
      whiteT10: "rgba(255, 255, 255, 0.1)",
      whiteT15: "rgba(255, 255, 255, 0.15)",
      whiteT20: "rgba(255, 255, 255, 0.2)",
      whiteT25: "rgba(255, 255, 255, 0.25)",
      whiteT30: "rgba(255, 255, 255, 0.3)",
      whiteT35: "rgba(255, 255, 255, 0.35)",
      whiteT40: "rgba(255, 255, 255, 0.4)",
      whiteT45: "rgba(255, 255, 255, 0.45)",
      whiteT50: "rgba(255, 255, 255, 0.5)",
      whiteT60: "rgba(255, 255, 255, 0.6)",
      whiteT70: "rgba(255, 255, 255, 0.7)",
      whiteT80: "rgba(255, 255, 255, 0.8)",
      whiteT90: "rgba(255, 255, 255, 0.9)",

      red100: "#F93A3A",
      red10: "#ffe9ea",

      green100: "#24be74",
      green10: "#e4f9ef",

      orange100: "#f1c23e",
      blue100: "#0101FF",
    },
    fonts: {
      body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      mono: `Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace`,
    },
    fontSizes: {
      0: "14px",
      1: "16px",
      2: "18px",
      3: "24px",
      4: "36px",
      5: "46px",
      6: "56px",
      7: "66px",
      8: "76px",
      9: "86px",
      10: "126px",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      body: "$regular",
      heading: "$semibold",
    },
    letterSpacings: {
      mono: "0.0725em",
      0: 0,
      1: 0,
      2: 0,
      3: "-0.01em",
      4: "-0.02em",
      5: "-0.02em",
      6: "-0.02em",
      7: "-0.02em",
      8: "-0.025em",
      9: "-0.025em",
      10: "-0.03em",
    },
    lineHeights: {
      base: 1,
      sub: 1.25,
      mid: 1.5,
      body: 1.75,
    },
    radii: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      round: "9999px",
    },
    shadows: {
      stroke: "inset 0 0 0 3px $colors$black100",
      0: "0px 10px 20px $colors$blackT5",
      1: "0px 10px 20px $colors$blackT10",
      2: "0px 15px 20px $colors$blackT15",
      3: "0px 8px 15px $colors$blackT25",
      button: "$3",
      card: "$0, 0px 0px 0px 1px $colors$blackT5",
      tight: "0px 2px 5px $colors$blackT5",
    },
    sizes: {
      container: "1600px",
      formElement0: "36px",
      formElement1: "48px",
      formElement2: "60px",
      avatar0: `${avatarScale[0]}px`,
      avatar1: `${avatarScale[1]}px`,
      avatar2: `${avatarScale[2]}px`,
      icon0: "12px",
      icon1: "16px",
      icon2: "18px",
      icon3: "24px",
      searchInput: "500px",
    },
    space: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "32px",
      8: "48px",
      9: "64px",
      10: "96px",
      11: "128px",
    },
    transitions: {
      0: "100ms",
      1: "300ms",
      2: "500ms",
      3: "1000ms",
      ease: "cubic-bezier(0.23, 1, 0.32, 1)",
    },
  },
  media: {
    // TODO: update to fit into the bp* naming scheme
    bpxs: "(max-width: 350px)",

    "bp0-max": "(max-width: 639px)",
    bp0: "(min-width: 640px)",
    "bp1-max": "(max-width: 831px)",
    bp1: "(min-width: 832px)",
    "bp2-max": "(max-width: 1023px)",
    bp2: "(min-width: 1024px)",
    "bp3-max": "(max-width: 1151px)",
    bp3: "(min-width: 1152px)",
    "bp4-max": "(max-width: 1279px)",
    bp4: "(min-width: 1280px)",
    "bp5-max": "(max-width: 1476px)",
    bp5: "(min-width: 1477px)",

    hover: "(hover: hover)",
  },
  utils: {
    marginX: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"margin">
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"margin">
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"padding">
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (
      value: Stitches.ScaleValue<"space"> | Stitches.PropertyValue<"padding">
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  prefix: "st-",
});

export type CSS = Stitches.CSS<typeof config>;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches;
