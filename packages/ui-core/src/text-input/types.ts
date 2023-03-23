import React from "react";
import { InputVariant } from "@f1/ui-theme";

export interface TextInputProps {
  variant?: InputVariant;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
