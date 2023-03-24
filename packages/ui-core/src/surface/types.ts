import React from "react";
import { SurfaceVariant } from "@f1/ui-theme";

export interface SurfaceProps {
  variant: SurfaceVariant;
  as?:
    | "div"
    | "section"
    | "article"
    | "aside"
    | "header"
    | "footer"
    | "nav"
    | "main";
  children: React.ReactNode;
  style?: Pick<React.CSSProperties, "width" | "height">;
}
