import React, { ReactNode, useMemo } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Tabs as AntTabs } from "antd";
import Icon from "../icon/Icon";
import {
    parseChildrenToArray,
    getComponentType,
    getComponentProps,
} from "../../utilities";
import { Props as TabPaneProps } from "./TabPane";

const { TabPane: AntTabPane } = AntTabs;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Current TabPane's key
     */
    value?: string;
    /**
     * Customize add icon
     */
    add_icon?: string;
    /**
     * Whether to change tabs with animation. Only works while tabPosition="top"
     */
    animated?: boolean;
    /**
     * Centers tabs
     */
    centered?: boolean;
    /**
     * Hide plus icon or not. Only works while type="editable-card"
     */
    hide_add?: boolean;
    /**
     * The custom icon of ellipsis
     */
    more_icon?: string;
    /**
     * Preset tab bar size
     */
    size?: "large" | "middle" | "small";
    /**
     * The gap between tabs
     */
    tab_bar_gutter?: number;
    /**
     * Tab bar style object
     */
    tab_bar_style?: object;
    /**
     * Position of tabs
     */
    tab_position?: "top" | "right" | "bottom" | "left";
    /**
     * Whether destroy inactive TabPane when tab is changed
     */
    destroy_inactive_tab_pane?: boolean;
    /**
     * Basic style of tabs
     */
    type?: "line" | "card" | "editable-card";
} & DashComponentProps &
    StyledComponentProps;

/**
 * Tabs
 */
const Tabs = (props: Props) => {
    const {
        children,
        value,
        class_name,
        add_icon,
        hide_add,
        more_icon,
        tab_bar_gutter,
        tab_bar_style,
        tab_position,
        destroy_inactive_tab_pane,
        setProps,
        ...otherProps
    } = props;

    const handleChange = (activeKey: string) => {
        if (setProps) {
            setProps({ value: activeKey });
        }
    };

    const tabItems = useMemo(
        () =>
            parseChildrenToArray(children)
                .filter((c) => getComponentType(c) === "TabPane")
                .map((c) => {
                    const tabProps = getComponentProps(c) as TabPaneProps;
                    return (
                        <AntTabPane
                            className={tabProps.class_name}
                            style={tabProps.style}
                            key={tabProps.key}
                            tab={tabProps.label}
                            forceRender={tabProps.force_render}
                            closeIcon={
                                tabProps.close_icon &&
                                Icon({ icon_name: tabProps.close_icon })
                            }
                        >
                            {c}
                        </AntTabPane>
                    );
                }),
        [children]
    );

    return (
        <AntTabs
            className={class_name}
            activeKey={value}
            addIcon={add_icon && Icon({ icon_name: add_icon })}
            hideAdd={hide_add}
            moreIcon={more_icon && Icon({ icon_name: more_icon })}
            tabBarGutter={tab_bar_gutter}
            tabBarStyle={tab_bar_style}
            tabPosition={tab_position}
            destroyInactiveTabPane={destroy_inactive_tab_pane}
            onChange={handleChange}
            {...otherProps}
        >
            {tabItems}
        </AntTabs>
    );
};

Tabs.defaultProps = {};

export default Tabs;
