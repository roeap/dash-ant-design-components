import React, { ReactNode } from "react";
import { DashComponentProps, DashLoadingState } from "../../props";
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
     * The type of the button
     */
    type: "ghost" | "dashed" | "link" | "text" | "default";
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
 * Component description
 */
const Button = (props: Props) => {
    const {
        id,
        disabled,
        children,
        setProps,
        n_clicks,
        href,
        class_name,
        loading_state,
        ...otherProps
    } = props;

    const incrementClicks = () => {
        if (!disabled && setProps) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <AntButton
            id={id}
            className={class_name}
            onClick={incrementClicks}
            href={disabled ? undefined : href}
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
