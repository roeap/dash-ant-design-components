import React from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Segmented as AntSegmented, SegmentedProps } from "antd";

type Props = {
    /**
     * Option to fit width to its parent\'s width
     */
    block?: boolean;
    /**
     * Disable all segments
     */
    disabled?: boolean;
    /**
     * Set children optional
     */
    options:
        | string[]
        | number[]
        | Array<{
              label: string;
              value: string;
              icon?: string;
              disabled?: boolean;
              className?: string;
          }>;
    /**
     * The size of the Segmented.
     */
    size?: "large" | "middle" | "small";
    /**
     * The input content value
     */
    value?: string | number;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Segmented component
 */
const Segmented = (props: Props) => {
    const { setProps, class_name, ...otherProps } = props;

    const handleClick: SegmentedProps["onClick"] = (value) => {
        setProps({ value });
    };

    return (
        <AntSegmented
            className={class_name}
            onClick={handleClick}
            {...otherProps}
        />
    );
};

export default Segmented;
