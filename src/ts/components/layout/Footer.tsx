import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Layout } from "antd";
import { omit } from "ramda";

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
    const { children, class_name, ...otherProps } = props;
    return (
        <AntFooter className={class_name} {...omit(["setProps"], otherProps)}>
            {children}
        </AntFooter>
    );
};

Footer.defaultProps = {};

export default Footer;
