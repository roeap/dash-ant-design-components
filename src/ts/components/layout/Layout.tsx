import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Layout as AntLayout } from "antd";
import { omit } from "ramda";

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
    const { children, class_name, has_sidebar, ...otherProps } = props;
    return (
        <AntLayout
            className={class_name}
            hasSider={has_sidebar}
            {...omit(["setProps"], otherProps)}
        >
            {children}
        </AntLayout>
    );
};

Layout.defaultProps = {};

export default Layout;
