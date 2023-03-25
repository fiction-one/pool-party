type ThemeableCssProperty = "color" | "background-color" | "border-color";

type ComponentTheme<
  T extends string,
  S extends string,
  P extends ThemeableCssProperty
> = Record<T, Record<S, Record<P, string>>>;

export interface Theme {
  button: ComponentTheme<
    "primary" | "secondary" | "ghost",
    "default" | "hover" | "active" | "disabled",
    "color" | "background-color" | "border-color"
  >;
  chip: ComponentTheme<
    "info" | "success" | "warning" | "error",
    "default",
    "color" | "background-color" | "border-color"
  >;
  input: ComponentTheme<
    "primary",
    "default" | "active",
    "color" | "background-color" | "border-color"
  >;
  surface: ComponentTheme<
    "navigation" | "page" | "surface" | "highlight" | "floating",
    "default",
    "background-color" | "border-color"
  >;
  text: ComponentTheme<"primary" | "secondary" | "caption", "default", "color">;
}
