import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Layout } from "antd";
import { omit } from "ramda";

const { Content: AntContent } = Layout;

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
const Content = (props: Props) => {
    const { children, class_name, ...otherProps } = props;
    return (
        <AntContent className={class_name} {...omit(["setProps"], otherProps)}>
            {children}
        </AntContent>
    );
};

Content.defaultProps = {};

export default Content;
