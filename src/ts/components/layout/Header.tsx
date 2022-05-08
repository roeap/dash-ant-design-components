import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Layout } from "antd";
import { omit } from "ramda";

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
    const { children, class_name, ...otherProps } = props;
    return (
        <AntHeader className={class_name} {...omit(["setProps"], otherProps)}>
            {children}
        </AntHeader>
    );
};

Header.defaultProps = {};

export default Header;
