import React, { ReactNode, useMemo } from "react";
import {
    DashComponentProps,
    StyledComponentProps,
    DashLoadingState,
} from "../../types";
import { Card as AntCard, CardProps } from "antd";
import {
    parseChildrenToArray,
    getComponentType,
    isStringWithCharacters,
} from "../../utilities";
import "./card.less";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
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

const omittedClasses = ["CardAction", "CardExtra", "CardTitle"];

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
        title,
        setProps,
        ...otherProps
    } = props;

    const actionItems = useMemo(
        () =>
            parseChildrenToArray(children).filter(
                (c) => getComponentType(c) === "CardAction"
            ),
        [children]
    );

    const extraItems = useMemo(
        () =>
            parseChildrenToArray(children).filter(
                (c) => getComponentType(c) === "CardExtra"
            ),
        [children]
    );

    const filteredChildren = useMemo(
        () =>
            parseChildrenToArray(children).filter(
                (c) => !omittedClasses.includes(getComponentType(c))
            ),
        [children]
    );

    const onTabChange: CardProps["onTabChange"] = (key) => {
        setProps({ active_tab_key: key });
    };

    return (
        <AntCard
            actions={actionItems}
            activeTabKey={active_tab_key}
            bodyStyle={body_style}
            className={`${class_name || ""} ${
                !isStringWithCharacters(title) ? "hide-title" : ""
            }`}
            extra={extraItems}
            title={title}
            headStyle={head_style}
            loading={(loading_state && loading_state.is_loading) || undefined}
            onTabChange={onTabChange}
            {...otherProps}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {filteredChildren}
        </AntCard>
    );
};

export default Card;
