import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Timeline as AntTimeline } from "antd";
import { omit } from "ramda";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * By sending alternate the timeline will distribute the nodes to the left and right
     */
    mode?: "left" | "alternate" | "right";
    /**
     * Set the last ghost node's existence or its content
     */
    pending?: boolean;
    /**
     * Whether reverse nodes or not
     */
    reverse?: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Timeline component
 */
const TimelineItem = (props: Props) => {
    const { class_name, children, ...otherProps } = props;

    return (
        <AntTimeline className={class_name} {...omit(["setProps"], otherProps)}>
            {children}
        </AntTimeline>
    );
};

export default TimelineItem;
