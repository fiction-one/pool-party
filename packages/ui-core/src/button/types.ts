import React from "react";
import { Theme } from "@f1/ui-theme";

type Size = "small" | "regular" | "large";

export interface ButtonProps {
  variant?: keyof Theme["button"];
  disabled?: boolean;
  size?: Size;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}
