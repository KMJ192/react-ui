import { COLOR } from '@src/color/color';

export const sideNavBackground = `var(--side-nav-background, linear-gradient(${COLOR.LIGHT.primary200}, ${COLOR.LIGHT.primary000}))`;
export const sideNavBoxShadow = `var(--sideNav-box-shadow, 0px 3px 6px rgba(64, 64, 64, 0.3))`;

export const sideNavMenuBackground = `var(--sideNav-menu-background)`;
export const sideNavMenuBackgroundSelected = `var(--sideNav-menu-background-selected, ${COLOR.LIGHT.primary000})`;
export const sideNavMenuBackgroundDisabled = `var(--sideNav-menu-background-disabled, ${COLOR.LIGHT.primary300})`;

export const sideNavMenuText = `var(--sideNav-menu-text, ${COLOR.LIGHT.primary900})`;
export const sideNavMenuTextSelected = `var(--sideNav-menu-text-selected, ${COLOR.LIGHT.primary900})`;
export const sideNavMenuTextHover = `var(--sideNav-menu-text-hover, ${COLOR.LIGHT.blue700})`;
export const sideNavMenuTextDisabled = `var(--sideNav-menu-text-disabled, ${COLOR.LIGHT.primary500})`;

export const sideNavMenuBoxShadow = `var(--sideNav-menu-box-shadow)`;
export const sideNavMenuBoxShadowSelected = `var(--sideNav-menu-box-shadow-selected, 0px 3px 6px rgba(64, 64, 64, 0.1))`;
