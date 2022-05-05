import React, { ReactNode } from "react";
import { DashComponentProps } from "../../types";
import { Layout } from "antd";

const { Header: AntHeader } = Layout;

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
} & DashComponentProps;

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
