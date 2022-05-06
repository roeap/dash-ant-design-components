import React, { ReactNode, Fragment } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";

export type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Customize close icon in TabPane's head. Only works while type="editable-card"
     */
    close_icon?: string;
    /**
     * Forced render of content in tabs, not lazy render after clicking on tabs
     */
    force_render?: boolean;
    /**
     * TabPane's key
     */
    tab_key: string;
    /**
     * Show text in TabPane's head
     */
    label: string;
} & DashComponentProps &
    StyledComponentProps;

/**
 * TabPane
 */
const TabPane = (props: Props) => {
    const { children } = props;
    return <Fragment>{children}</Fragment>;
};

TabPane.defaultProps = {};

export default TabPane;
