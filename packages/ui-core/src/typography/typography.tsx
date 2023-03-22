import { TypographyProps } from "./types";
import { StyledTypography } from "./style";

export const Typography = (props: TypographyProps) => {
  return <StyledTypography {...props}>{props.children}</StyledTypography>;
};
