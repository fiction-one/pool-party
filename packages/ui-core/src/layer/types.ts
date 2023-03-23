import React from "react";
import { LayerVariant } from "@f1/ui-theme/src/themes/types";

export interface LayerProps {
  variant: LayerVariant;
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
