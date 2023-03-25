import React from "react";
import styled, { css, DefaultTheme } from "styled-components";
import { SurfaceProps } from "./types";

const getThemeable = (
  theme: DefaultTheme,
  variant: keyof DefaultTheme["surface"]
) => {
  const surfaceTheme = theme.surface[variant];
  return css`
    background-color: ${surfaceTheme.default["background-color"]};
    border-color: ${surfaceTheme.default["border-color"]};
  `;
};

const DEFAULT_VARIANT: keyof DefaultTheme["surface"] = "page";

export const StyledSurface = styled.div<SurfaceProps>`
  ${({ theme, variant }) => getThemeable(theme, variant ?? DEFAULT_VARIANT)}
`;
