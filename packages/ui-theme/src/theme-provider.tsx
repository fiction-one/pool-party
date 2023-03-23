import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "./themes";

interface Props {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = (props: Props) => {
  return (
    <StyledThemeProvider theme={props.theme}>
      {props.children}
    </StyledThemeProvider>
  );
};
