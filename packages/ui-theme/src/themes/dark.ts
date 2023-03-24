import { Theme } from "./types";

const palette = {
  shadeWhite: "#FFFFFF",
  dark50: "#5F626B",
  dark100: "#555962",
  dark200: "#4C4F59",
  dark300: "#424651",
  dark400: "#424651",
  dark500: "#393D48",
  dark600: "#2F343F",
  dark700: "#262A36",
  dark800: "#1C212E",
  dark900: "#131825",
  neutral50: "#F8FAFC",
  neutral100: "#F1F5F9",
  neutral200: "#E2E8F0",
  neutral300: "#CBD5E1",
  neutral400: "#94A3B8",
  neutral500: "#64748B",
  neutral600: "#475569",
  neutral700: "#334155",
  neutral800: "#1E293B",
  neutral900: "#0F172A",
};

export const darkTheme: Theme = {
  button: {
    primary: {
      default: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      hover: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      active: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      disabled: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
    },
    secondary: {
      default: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      hover: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      active: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      disabled: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
    },
    ghost: {
      default: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      hover: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      active: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
      disabled: {
        "background-color": "transparent",
        color: palette.neutral400,
        "border-color": palette.neutral400,
      },
    },
  },
  input: {
    primary: {
      default: {
        "background-color": palette.dark700,
        color: palette.shadeWhite,
        "border-color": palette.dark700,
      },
      active: {
        "background-color": palette.dark700,
        color: palette.shadeWhite,
        "border-color": palette.dark700,
      },
    },
  },
  surface: {
    navigation: {
      default: {
        "background-color": palette.dark900,
        "border-color": palette.dark900,
      },
    },
    page: {
      default: {
        "background-color": palette.dark900,
        "border-color": palette.dark900,
      },
    },
    surface: {
      default: {
        "background-color": palette.dark800,
        "border-color": palette.dark200,
      },
    },
    highlight: {
      default: {
        "background-color": palette.dark700,
        "border-color": palette.dark200,
      },
    },
    floating: {
      default: {
        "background-color": palette.dark900,
        "border-color": palette.dark900,
      },
    },
  },
  text: {
    primary: {
      default: {
        color: palette.shadeWhite,
      },
    },
    secondary: {
      default: {
        color: palette.neutral400,
      },
    },
    caption: {
      default: {
        color: "#fff",
      },
    },
  },
};
