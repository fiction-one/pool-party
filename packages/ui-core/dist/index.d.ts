import React from 'react';
import { ButtonVariant, LayerVariant } from '@f1/ui-theme/src/themes/types';

type Size = "small" | "regular" | "large";
interface ButtonProps {
    variant?: ButtonVariant;
    disabled?: boolean;
    size?: Size;
    fullWidth?: boolean;
    onClick?: React.MouseEventHandler;
    children: React.ReactNode;
}

declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface LayerProps {
    variant: LayerVariant;
    as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "nav" | "main";
    children: React.ReactNode;
}

declare const Layer: React.ForwardRefExoticComponent<LayerProps & React.RefAttributes<HTMLElement>>;

interface TypographyProps {
    as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    lineHeight?: "small" | "regular";
    fontSize?: 10 | 12 | 14 | 16 | 18 | 24 | 28 | 32 | 48 | 72;
    fontWeight?: "light" | "regular" | "semi" | "bold";
    truncate?: boolean;
    children: React.ReactNode;
}

declare const Typography: (props: TypographyProps) => JSX.Element;

export { Button, Layer, Typography };
