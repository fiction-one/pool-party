import { Theme } from "@f1/ui-theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
