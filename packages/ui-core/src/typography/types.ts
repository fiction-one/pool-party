import React from "react";

export interface TypographyProps {
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  lineHeight?: "small" | "regular";
  fontSize?: 10 | 12 | 14 | 16 | 18 | 24 | 28 | 32 | 48 | 72;
  fontWeight?: "light" | "regular" | "semi" | "bold";
  truncate?: boolean;
  children: React.ReactNode;
}
