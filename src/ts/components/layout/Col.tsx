import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Col as AntCol } from "antd";
import { omit } from "ramda";

export type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Flex layout style
     */
    flex?: string | number;
    /**
     * The number of cells to offset Col from the left
     */
    offset?: number;
    /**
     * Raster order
     */
    order?: number;
    /**
     * The number of cells that raster is moved to the left
     */
    pull?: number;
    /**
     * The number of cells that raster is moved to the right
     */
    push?: number;
    /**
     * Raster number of cells to occupy, 0 corresponds to display: none
     */
    span?: number;
    /**
     * screen < 576px and also default setting, could be a span value or an object containing above props
     */
    xs?: number | object;
    /**
     * screen ≥ 576px, could be a span value or an object containing above props
     */
    sm?: number | object;
    /**
     * screen ≥ 768px, could be a span value or an object containing above props
     */
    md?: number | object;
    /**
     * screen ≥ 992px, could be a span value or an object containing above props
     */
    lg?: number | object;
    /**
     * screen ≥ 1200px, could be a span value or an object containing above props
     */
    xl?: number | object;
    /**
     * screen ≥ 1600px, could be a span value or an object containing above props
     */
    xxl?: number | object;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Col
 */
const Col = (props: Props) => {
    const { children, class_name, ...otherProps } = props;
    return (
        <AntCol className={class_name} {...omit(["setProps"], otherProps)}>
            {children}
        </AntCol>
    );
};

Col.defaultProps = {
    align: "top",
    gutter: 0,
    justify: "start",
    wrap: true,
};

export default Col;
