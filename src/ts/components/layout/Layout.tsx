import React, { ReactNode } from "react";
import { DashComponentProps } from "../../props";
import { Layout as AntLayout } from "antd";

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
     * Whether a Sidebar is contained in children. Does not necessarily have to be specified,
     * but useful in ssr avoid style flickering.
     */
    has_sidebar?: boolean;
} & DashComponentProps;

/**
 * Handling the overall layout of a page.
 */
const Layout = (props: Props) => {
    const { id, children, style, class_name, has_sidebar } = props;
    return (
        <AntLayout
            id={id}
            style={style}
            className={class_name}
            hasSider={has_sidebar}
        >
            {children}
        </AntLayout>
    );
};

Layout.defaultProps = {};

export default Layout;
