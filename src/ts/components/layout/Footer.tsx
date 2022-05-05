import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

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
