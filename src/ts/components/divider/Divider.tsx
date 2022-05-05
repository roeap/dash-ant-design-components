import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Divider as AntDivider } from "antd";
import { omit } from "ramda";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Whether line is dashed
     */
    dashed?: boolean;
    /**
     * The position of title inside divider
     */
    orientation?: "left" | "right" | "center";
    /**
     * The margin-left/right between the title and its closest border,
     * while the orientation must be left or right
     */
    orientation_margin?: string | number;
    /**
     * Divider text show as plain style
     */
    plain?: boolean;
    /**
     * The direction type of divider
     */
    type?: "horizontal" | "vertical";
} & DashComponentProps &
    StyledComponentProps;

const Divider = (props: Props) => {
    const { class_name, orientation_margin, children, ...otherProps } = props;
    return (
        <AntDivider
            className={class_name}
            orientationMargin={orientation_margin}
            {...omit(["setProps"], otherProps)}
        >
            {children}
        </AntDivider>
    );
};

Divider.defaultProps = {};

export default Divider;
