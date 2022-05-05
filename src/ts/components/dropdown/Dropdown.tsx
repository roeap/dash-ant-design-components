import React, { ReactNode } from "react";
import { DashComponentProps, DashLoadingState } from "../../types";
import { Dropdown as AntDropdown } from "antd";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Set the danger status of button
     */
    danger?: boolean;
    /**
     * Disabled state of button
     */
    disabled?: boolean;
    /**
     * Pass a URL (relative or absolute) to make the menu entry a link.
     */
    href?: string;
    /**
     * The shape of the button
     */
    shape: "default" | "circle" | "round";
    /**
     * The size of the button
     */
    size: "large" | "middle" | "small";
    /**
     * The type of the button
     */
    type: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
    /**
     * Defines CSS styles which will override styles previously set.
     */
    style?: object;
    /**
     * Often used with CSS to style elements with common properties.
     */
    class_name?: string;
} & DashComponentProps;

/**
 *
 * A Dropdown component
 */
const Dropdown = (props: Props) => {
    const { id, href, disabled, class_name, children, ...otherProps } = props;

    return <Dropdown>{children}</Dropdown>;
};

Dropdown.defaultProps = {
    shape: "default",
    size: "middle",
    type: "default",
    n_clicks: 0,
};

export default Dropdown;
