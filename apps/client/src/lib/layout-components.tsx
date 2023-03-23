import styled from "styled-components";
import { pxToRem } from "@f1/ui-utils";

export const Frame = styled.div`
  margin: 0 auto;
  max-width: ${pxToRem(1080)};
`;

export const Section = styled.div`
  margin: ${pxToRem(36)} 0;
`;
