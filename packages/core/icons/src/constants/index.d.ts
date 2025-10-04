import type { IconSize, IconColor } from '../types';
/**
 * Default configuration values for the Icon component
 */
export declare const DEFAULT_ICON_CONFIG: {
    readonly variant: "rounded";
    readonly fill: 0;
    readonly weight: 400;
    readonly grade: 0;
    readonly opsz: 24;
    readonly fontSize: "medium";
    readonly color: "inherit";
};
/**
 * CSS class mappings for icon size presets
 */
export declare const ICON_SIZE_CLASSES: Record<Exclude<IconSize, number>, string>;
/**
 * CSS class mappings for icon color presets
 */
export declare const ICON_COLOR_CLASSES: Record<IconColor, string>;
/**
 * Font family mappings for Material Symbols variants
 */
export declare const MATERIAL_SYMBOLS_FONTS: {
    readonly outlined: "Material Symbols Outlined";
    readonly filled: "Material Symbols Rounded";
    readonly rounded: "Material Symbols Rounded";
    readonly sharp: "Material Symbols Sharp";
};
/**
 * Base CSS classes applied to all icon instances
 */
export declare const BASE_ICON_CLASSES = "inline-flex items-center justify-center select-none font-material-symbols";
/**
 * Range constraints for Material Symbols variable font properties
 */
export declare const FONT_CONSTRAINTS: {
    readonly weight: {
        readonly min: 100;
        readonly max: 700;
    };
    readonly grade: {
        readonly min: -50;
        readonly max: 200;
    };
    readonly opsz: {
        readonly min: 20;
        readonly max: 48;
    };
};
//# sourceMappingURL=index.d.ts.map