import * as React from "react";
import { Typography } from "@f1/ui-core";
import { LayerOptions } from "./types";
import { FloatingProvider, useTooltip } from "./floating-provider";
import { ContentPortal, TooltipSurface, Trigger } from "./components";

interface Props extends LayerOptions {
  children: React.ReactNode;
  content: React.ReactNode;
}

export const Tooltip = ({ children, content, ...options }: Props) => {
  return (
    <FloatingProvider layerInterface={useTooltip(options)}>
      <Trigger>{children}</Trigger>
      <ContentPortal>
        <TooltipSurface>
          <Typography fontSize={12}>{content}</Typography>
        </TooltipSurface>
      </ContentPortal>
    </FloatingProvider>
  );
};
