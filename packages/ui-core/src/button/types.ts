import React from "react";
import { ButtonVariant } from "@f1/ui-theme/src/themes/types";

type Size = "small" | "regular" | "large";

export interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  size?: Size;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}
