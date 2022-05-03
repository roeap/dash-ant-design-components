import React, { ReactNode } from "react";
import { DashComponentProps } from "../../props";
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

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
const Footer = (props: Props) => {
    const { id, children, style, class_name } = props;
    return (
        <AntFooter id={id} style={style} className={class_name}>
            {children}
        </AntFooter>
    );
};

Footer.defaultProps = {};

export default Footer;
