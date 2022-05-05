import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Layout as AntLayout } from "antd";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Whether a Sidebar is contained in children. Does not necessarily have to be specified,
     * but useful in ssr avoid style flickering.
     */
    has_sidebar?: boolean;
} & DashComponentProps &
    StyledComponentProps;

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
