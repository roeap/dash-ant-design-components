import React, { ReactNode } from "react";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../types";
import { Button as AntButton } from "antd";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Set the danger status of button
     */
    danger: boolean;
    /**
     * Disabled state of button
     */
    disabled: boolean;
    /**
     * The shape of the button
     */
    shape: "default" | "circle" | "round";
    /**
     * The size of the button
     */
    size: "large" | "middle" | "small";
    /**
     * Same as target attribute of a, works when href is specified
     */
    target?: string;
    /**
     * The type of the button
     */
    type: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    n_clicks: number;
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
    /**
     * Pass a URL (relative or absolute) to make the menu entry a link.
     */
    href?: string;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A basic Button component
 */
const Button = (props: Props) => {
    const {
        disabled,
        children,
        setProps,
        n_clicks,
        href,
        class_name,
        loading_state,
        ...otherProps
    } = props;

    const onClick = () => {
        if (!disabled && setProps) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <AntButton
            className={class_name}
            onClick={onClick}
            href={disabled ? undefined : href}
            disabled={disabled}
            loading={loading_state && loading_state.is_loading}
            {...otherProps}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {children || "Button"}
        </AntButton>
    );
};

Button.defaultProps = {
    danger: false,
    disabled: false,
    shape: "default",
    size: "middle",
    type: "default",
    n_clicks: 0,
};

export default Button;
