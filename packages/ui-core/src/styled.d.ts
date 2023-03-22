import { Theme } from "@f1/ui-theme/src";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
