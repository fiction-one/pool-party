import React from "react";
import { Theme } from "@f1/ui-theme";

export interface TextInputProps {
  variant?: keyof Theme["input"];
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
