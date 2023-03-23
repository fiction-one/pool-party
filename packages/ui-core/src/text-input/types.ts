import React from "react";
import { InputVariant } from "@f1/ui-theme/src/themes/types";

export interface TextInputProps {
  variant?: InputVariant;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
