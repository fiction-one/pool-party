export type ButtonVariant = "primary" | "secondary" | "ghost";

export type InputVariant = "primary";

export type SurfaceVariant =
  | "navigation"
  | "page"
  | "surface"
  | "highlight"
  | "floating";

export type TextVariant = "primary" | "secondary" | "caption";

type ThemeableCssProperty = "color" | "background-color" | "border-color";

type ThemeItem<
  T extends string,
  S extends string,
  P extends ThemeableCssProperty
> = Record<T, Record<S, Record<P, string>>>;

export interface Theme {
  button: ThemeItem<
    ButtonVariant,
    "default" | "hover" | "active" | "disabled",
    "color" | "background-color" | "border-color"
  >;
  input: ThemeItem<
    InputVariant,
    "default" | "active",
    "color" | "background-color" | "border-color"
  >;
  surface: ThemeItem<
    SurfaceVariant,
    "default",
    "background-color" | "border-color"
  >;
  text: ThemeItem<TextVariant, "default", "color">;
}
