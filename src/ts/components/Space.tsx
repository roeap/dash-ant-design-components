import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../types";
import { Space as AntSpace } from "antd";
import { omit } from "ramda";

type Size = "small" | "middle" | "large" | number;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Align items
     */
    align?: "start" | "end" | "center" | "baseline";
    /**
     * The space direction
     */
    direction?: "vertical" | "horizontal";
    /**
     * The space size
     */
    size?: Size | [Size, Size];
    /**
     * Set split
     */
    split?: ReactNode;
    /**
     * Auto wrap line, when horizontal effective
     */
    wrap?: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Set components spacing.
 */
const Space = (props: Props) => {
    const { children, class_name, ...otherProps } = props;

    return (
        <AntSpace className={class_name} {...omit(["setProps"], otherProps)}>
            {children}
        </AntSpace>
    );
};

Space.defaultProps = {
    checked: false,
};

export default Space;
