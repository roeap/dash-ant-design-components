import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Tabs } from "antd";
import * as icons from "@ant-design/icons";
import { omit } from "ramda";

const { TabPane: AntTabsPane } = Tabs;

type Props = {
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
    key?: string;
    /**
     * Show text in TabPane's head
     */
    tab?: string;
} & DashComponentProps &
    StyledComponentProps;

/**
 * TabPane
 */
const TabPane = (props: Props) => {
    const { class_name, close_icon, force_render, ...otherProps } = props;
    return (
        <AntTabsPane
            className={class_name}
            closeIcon={close_icon && icons[close_icon]}
            forceRender={force_render}
            {...omit(["setProps"], otherProps)}
        />
    );
};

TabPane.defaultProps = {};

export default TabPane;
