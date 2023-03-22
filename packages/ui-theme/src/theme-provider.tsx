import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";

interface Props {
  theme: "light" | "dark";
  children: React.ReactNode;
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const ThemeProvider = (props: Props) => {
  return (
    <StyledThemeProvider theme={themes[props.theme]}>
      {props.children}
    </StyledThemeProvider>
  );
};
