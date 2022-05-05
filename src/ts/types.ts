import { ReactNode } from "react";

/**
 * Every Dash components are given these props.
 * Use with your own props:
 * ```
 * type Props = {
 *     my_prop: string;
 * } & DashComponentProps;
 * ```
 * Recommended to use `type` instead of `interface` so you can define the
 * order of props with types concatenation.
 */
export type DashComponentProps = {
    /**
     * Unique ID to identify this component in Dash callbacks.
     */
    id?: string;
    /**
     * A unique identifier for the component, used to improve
     * performance by React.js while rendering components
     * See https://reactjs.org/docs/lists-and-keys.html for more info
     */
    key?: string;
    /**
     * Update props to trigger callbacks.
     */
    setProps?: (props: Record<string, any>) => void;
};

/**
 * Components that can be styles from Dash via `styles` or `class_name` props.
 */
export type StyledComponentProps = {
    /**
     * Defines CSS styles which will override styles previously set.
     */
    style?: object;
    /**
     * Often used with CSS to style elements with common properties.
     */
    class_name?: string;
};

/**
 * Object that holds the loading state object coming from dash-renderer
 */
export type DashLoadingState = {
    /**
     * Determines if the component is loading or not
     */
    is_loading: boolean;
    /**
     * Holds which property is loading
     */
    prop_name: string;
    /**
     * Holds the name of the component that is loading
     */
    component_name: string;
};

export type MenuItem = {
    /**
     * Display the danger style
     */
    danger?: boolean;
    /**
     * Whether menu item is disabled
     */
    disabled?: boolean;
    /**
     * The icon of the menu item
     */
    icon?: ReactNode;
    /**
     * Unique ID of the menu item
     */
    key: string;
    /**
     * Menu label
     */
    label: ReactNode;
    /**
     * Set display title for collapsed item
     */
    title?: string;
};

export type MenuItemGroup = {
    type: "group";
    /**
     * Sub-menu items
     */
    children: MenuItem[];
    /**
     * The title of the group
     */
    label: ReactNode;
};

export type SubMenu = {
    /**
     * Sub-menus or sub-menu items
     */
    children: ItemType[];
    /**
     * Whether menu item is disabled
     */
    disabled?: boolean;
    /**
     * The icon of the menu item
     */
    icon?: ReactNode;
    /**
     * Unique ID of the menu item
     */
    key: string;
    /**
     * Menu label
     */
    label: ReactNode;
    /**
     * Set display title for collapsed item
     */
    title?: string;
    /**
     * Color theme of the SubMenu (inherits from Menu by default)
     */
    theme?: "light" | "dark";
    /**
     * Sub-menu class name, not working when mode="inline"
     */
    popupClassName?: string;
    /**
     * Sub-menu offset, not working when mode="inline"
     */
    popupOffset?: [number, number];
};

export type MenuDivider = {
    type: "divider";
};

export type ItemType = MenuItem | MenuItemGroup | SubMenu | MenuDivider;
