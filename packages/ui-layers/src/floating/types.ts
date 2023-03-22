import { Placement } from "@floating-ui/react";

export interface LayerOptions {
  defaultVisible?: boolean;
  placement?: Placement;
  trigger?: "hover" | "focus" | "click";
  distance?: number;
  visible?: boolean;
  onTrigger?: () => void;
}
