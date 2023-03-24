import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { SurfaceProps } from "./types";
import { SurfaceVariant } from "@f1/ui-theme";

const getThemeable = (theme: DefaultTheme, variant: SurfaceVariant) => {
  const surfaceTheme = theme.surface[variant];
  return css`
    background-color: ${surfaceTheme.default["background-color"]};
    border-color: ${surfaceTheme.default["border-color"]};
  `;
};

export const StyledSurface = styled.div<SurfaceProps>`
  ${({ theme, variant }) => getThemeable(theme, variant)}
`;
