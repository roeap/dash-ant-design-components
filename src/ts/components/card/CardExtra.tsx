import React, { ReactNode, Fragment } from "react";
import { DashComponentProps } from "../../types";

export type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
} & DashComponentProps;

/**
 * TabPane
 */
const CardExtra = (props: Props) => {
    const { children } = props;
    return <Fragment>{children}</Fragment>;
};

CardExtra.defaultProps = {};

export default CardExtra;
