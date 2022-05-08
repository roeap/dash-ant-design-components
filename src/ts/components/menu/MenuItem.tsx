import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Menu } from "antd";
import { omit } from "ramda";

const { Item } = Menu;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
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
} & DashComponentProps &
    StyledComponentProps;

/**
 * MenuItem to be used as child elements to the "Menu" component.
 * If used, "items" property on menu must be left empty.
 */
const MenuItem = (props: Props) => {
    const { children, class_name, ...otherProps } = props;
    return (
        <Item className={class_name} {...omit(["setProps"], otherProps)}>
            {children}
        </Item>
    );
};

export default MenuItem;
