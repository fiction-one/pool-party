import * as React from "react";
import { LayerOptions } from "./types";
import { FloatingProvider, useTooltip } from "./floating-provider";
import { PopoverLayer, ContentPortal, Trigger } from "./components";

interface Props extends LayerOptions {
  children: React.ReactNode;
  content: React.ReactNode;
}

export const Popover = ({ children, content, ...options }: Props) => {
  return (
    <FloatingProvider layerInterface={useTooltip(options)}>
      <Trigger>{children}</Trigger>
      <ContentPortal>
        <PopoverLayer>{content}</PopoverLayer>
      </ContentPortal>
    </FloatingProvider>
  );
};
