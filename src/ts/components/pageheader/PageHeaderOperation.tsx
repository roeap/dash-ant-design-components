import React, { Fragment, ReactNode } from "react";
import { DashComponentProps } from "../../types";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
} & DashComponentProps;

/**
 * Wrapper component to place content in the Operations section of a PageHeader
 */
const PageHeaderOperation = (props: Props) => {
    const { children } = props;
    return <Fragment>{children}</Fragment>;
};

PageHeaderOperation.defaultProps = {};

export default PageHeaderOperation;
