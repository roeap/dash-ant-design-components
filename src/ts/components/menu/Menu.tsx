import React, { ReactNode, useCallback } from "react";
import {
    DashComponentProps,
    ItemType,
    StyledComponentProps,
} from "../../types";
import { Menu as AntMenu, MenuProps } from "antd";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * custom expand icon of submenu
     */
    expand_icon?: ReactNode;
    /**
     * Render submenu into DOM before it becomes visible
     */
    force_sub_menu_render?: boolean;
    /**
     * Specifies the collapsed status when menu is inline mode
     */
    inline_collapsed?: boolean;
    /**
     * Indent (in pixels) of inline menu items on each level
     */
    inline_indent?: number;
    /**
     * Menu item content
     */
    items?: ItemType[];
    /**
     * Type of menu
     */
    mode?: "vertical" | "horizontal" | "inline";
    /**
     * Allows selection of multiple items
     */
    multiple?: boolean;
    /**
     * Array with the keys of currently opened sub-menus
     */
    open_keys?: string[];
    /**
     * Customized the ellipsis icon when menu is collapsed horizontally
     */
    overflowed_indicator?: ReactNode;
    /**
     * Allows selecting menu items
     */
    selectable?: boolean;
    /**
     * Array with the keys of currently selected menu items
     */
    selected_keys: string[];
    /**
     * Delay time to hide submenu when mouse leaves (in seconds)
     */
    sub_menu_close_delay?: number;
    /**
     * Delay time to show submenu when mouse enters, (in seconds)
     */
    sub_menu_open_delay?: number;
    /**
     * Color theme of the menu
     */
    theme?: "light" | "dark";
} & DashComponentProps &
    StyledComponentProps;

/**
 * A versatile menu for navigation.
 */
const Menu = (props: Props) => {
    const {
        class_name,
        children,
        expand_icon,
        force_sub_menu_render,
        inline_collapsed,
        inline_indent,
        open_keys,
        overflowed_indicator,
        selected_keys,
        sub_menu_close_delay,
        sub_menu_open_delay,
        multiple,
        setProps,
        ...otherProps
    } = props;

    const onSelect: MenuProps["onSelect"] = useCallback(
        ({ key, selectedKeys }) => {
            if (multiple) {
                setProps({ selected_keys: [...selectedKeys, key] });
            } else {
                setProps({ selected_keys: [key] });
            }
        },
        [multiple, setProps]
    );

    const onDeselect: MenuProps["onDeselect"] = useCallback(
        ({ key, selectedKeys }) => {
            // no need to check for multiple, since this function only gets call when multiple true.
            setProps({
                selected_keys: selectedKeys.filter((val) => val !== key),
            });
        },
        [setProps]
    );

    const onOpenChange: MenuProps["onOpenChange"] = useCallback(
        (openKeys) => {
            setProps({ open_keys: openKeys });
        },
        [setProps]
    );

    return (
        <AntMenu
            className={class_name}
            expandIcon={expand_icon}
            forceSubMenuRender={force_sub_menu_render}
            inlineCollapsed={inline_collapsed}
            inlineIndent={inline_indent}
            openKeys={open_keys}
            overflowedIndicator={overflowed_indicator}
            selectedKeys={selected_keys}
            subMenuCloseDelay={sub_menu_close_delay}
            subMenuOpenDelay={sub_menu_open_delay}
            onSelect={onSelect}
            onDeselect={onDeselect}
            onOpenChange={onOpenChange}
            {...otherProps}
        >
            {children}
        </AntMenu>
    );
};

Menu.defaultProps = {
    selectable: true,
    selected_keys: [],
};

export default Menu;
