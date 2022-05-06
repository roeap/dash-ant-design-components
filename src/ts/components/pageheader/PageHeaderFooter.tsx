import React, { Fragment, ReactNode } from "react";
import { DashComponentProps } from "../../types";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
} & DashComponentProps;

/**
 * Wrapper component to place content in the Footers section of a PageHeader
 */
const PageHeaderFooter = (props: Props) => {
    const { children } = props;
    return <Fragment>{children}</Fragment>;
};

PageHeaderFooter.defaultProps = {};

export default PageHeaderFooter;
