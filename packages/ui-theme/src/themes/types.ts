export type ButtonVariant = "primary" | "secondary" | "ghost";

export type LayerVariant = "navigation" | "page" | "card" | "floating";

export type TextVariant = "primary" | "secondary" | "disabled";

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
  layer: ThemeItem<
    LayerVariant,
    "default",
    "background-color" | "border-color"
  >;
  text: ThemeItem<TextVariant, "default", "color">;
}
