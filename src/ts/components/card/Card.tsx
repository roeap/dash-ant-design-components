import React, { ReactNode } from "react";
import {
    DashComponentProps,
    StyledComponentProps,
    DashLoadingState,
} from "../../types";
import { Card as AntCard, CardProps } from "antd";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * The action list, shows at the bottom of the Card
     */
    actions?: ReactNode[];
    /**
     * Content to render in the top-right corner of the card
     */
    extra?: ReactNode;
    /**
     * Current TabPane's key
     */
    active_tab_key?: string;
    /**
     * Inline style to apply to the card content
     */
    body_style?: object;
    /**
     * Toggles rendering of the border around the card
     */
    bordered?: boolean;
    /**
     * Inline style to apply to the card head
     */
    head_style?: object;
    /**
     * Lift up when hovering card
     */
    hoverable?: boolean;
    /**
     * Card title
     */
    title?: string;
    /**
     * Shows a loading indicator while the contents of the card are being fetched
     */
    loading?: boolean;
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Simple rectangular container.
 */
const Card = (props: Props) => {
    const {
        active_tab_key,
        body_style,
        children,
        class_name,
        head_style,
        loading_state,
        setProps,
        ...otherProps
    } = props;

    const onTabChange: CardProps["onTabChange"] = (key) => {
        setProps({ active_tab_key: key });
    };

    return (
        <AntCard
            activeTabKey={active_tab_key}
            bodyStyle={body_style}
            className={class_name}
            headStyle={head_style}
            loading={(loading_state && loading_state.is_loading) || undefined}
            onTabChange={onTabChange}
            {...otherProps}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {children}
        </AntCard>
    );
};

export default Card;
