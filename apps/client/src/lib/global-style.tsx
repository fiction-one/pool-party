"use client";

import { createGlobalStyle, css } from "styled-components";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${inter.style.fontFamily};
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
    ${({ theme }) => {
      return css`
        background-color: ${theme.surface.page.default["background-color"]};
        color: ${theme.text.primary.default["color"]};

        * {
          ::-webkit-scrollbar {
            width: 0.5rem;
          }

          ::-webkit-scrollbar-track {
            background: ${theme.surface.page.default["background-color"]};
            border-radius: 0.75rem;
          }

          ::-webkit-scrollbar-thumb {
            background: ${theme.surface.surface.default["background-color"]};
            border-radius: 0.75rem;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: ${theme.surface.highlight.default["background-color"]};
          }
        }
      `;
    }}
`;
