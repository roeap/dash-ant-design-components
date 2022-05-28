import React from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Timeline } from "antd";
import { omit } from "ramda";

const { Item } = Timeline;

type Props = {
    /**
     * Set the circle's color to blue, red, green, gray or other custom colors	string
     */
    color?: string;
    /**
     * Set the label
     */
    label?: string;
    /**
     * Customize node position
     */
    position?: "left" | "right";
} & DashComponentProps &
    StyledComponentProps;

/**
 * An item in the timeline
 */
const TimelineItem = (props: Props) => {
    const { class_name, ...otherProps } = props;

    return <Item className={class_name} {...omit(["setProps"], otherProps)} />;
};

export default TimelineItem;
