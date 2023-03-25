import React from "react";
import { Theme } from "@f1/ui-theme";

export interface SurfaceProps {
  variant?: keyof Theme["surface"];
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
