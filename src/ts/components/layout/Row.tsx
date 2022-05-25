import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Row as AntRow } from "antd";
import { omit } from "ramda";

export type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Vertical alignment
     */
    align: "top" | "middle" | "bottom";
    /**
     * Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}
     * Or you can use array to make horizontal and vertical spacing work at the same time [horizontal, vertical]
     */
    gutter: number | object | [number, number] | [object, object];
    /**
     * Horizontal arrangement
     */
    justify:
        | "start"
        | "end"
        | "center"
        | "space-around"
        | "space-between"
        | "space-evenly";
    /**
     * Auto wrap line
     */
    wrap: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Row
 */
const Row = (props: Props) => {
    const { children, class_name, ...otherProps } = props;
    return (
        <AntRow className={class_name} {...omit(["setProps"], otherProps)}>
            {children}
        </AntRow>
    );
};

Row.defaultProps = {
    align: "top",
    gutter: 0,
    justify: "start",
    wrap: true,
};

export default Row;
