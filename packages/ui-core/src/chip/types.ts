import React from "react";
import { Theme } from "@f1/ui-theme";

type Size = "small" | "regular";

export interface ChipProps {
  variant?: keyof Theme["chip"];
  disabled?: boolean;
  size?: Size;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}
