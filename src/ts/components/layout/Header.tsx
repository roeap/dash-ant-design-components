import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Layout } from "antd";

const { Header: AntHeader } = Layout;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Handling the overall layout of a page.
 */
const Header = (props: Props) => {
    const { id, children, style, class_name } = props;
    return (
        <AntHeader id={id} style={style} className={class_name}>
            {children}
        </AntHeader>
    );
};

Header.defaultProps = {};

export default Header;
