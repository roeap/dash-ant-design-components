import React, { ReactNode } from "react";
import { DashComponentProps } from "../../types";
import { Layout } from "antd";

const { Sider } = Layout;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Defines CSS styles which will override styles previously set.
     */
    style?: object;
    /**
     * Often used with CSS to style elements with common properties.
     */
    class_name?: string;
    /**
     * Whether the sidebar is collapsed
     */
    collapsed?: boolean;
    /**
     * Width of the collapsed sidebar, by setting to 0 a special trigger will appear
     */
    collapsed_width: number;
    /**
     * Whether the sidebar can be collapsed
     */
    collapsible: boolean;
    /**
     * Reverse direction of arrow, for a sidebar that expands from the right
     */
    reverse_arrow: boolean;
    /**
     * Color theme of the sidebar
     */
    theme?: "light" | "dark";
    /**
     * 	Width of the sidebar
     */
    width: number | string;
} & DashComponentProps;

/**
 * Handling the overall layout of a page.
 */
const Sidebar = (props: Props) => {
    const {
        id,
        children,
        class_name,
        reverse_arrow,
        collapsed_width,
        setProps,
        ...otherProps
    } = props;
    return (
        <Sider
            id={id}
            className={class_name}
            collapsedWidth={collapsed_width}
            reverseArrow={reverse_arrow}
            {...otherProps}
        >
            {children}
        </Sider>
    );
};

Sidebar.defaultProps = {
    collapsed_width: 80,
    collapsible: false,
    collapsed: false,
    reverse_arrow: false,
    width: 200,
};

export default Sidebar;
