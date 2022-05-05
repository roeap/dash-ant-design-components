import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Layout } from "antd";

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
    const { id, children, style, class_name } = props;
    return (
        <AntContent id={id} style={style} className={class_name}>
            {children}
        </AntContent>
    );
};

Content.defaultProps = {};

export default Content;
