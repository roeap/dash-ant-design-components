import React, { useCallback } from "react";
import { DashComponentProps, StyledComponentProps } from "../types";
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

    const handleClick: SegmentedProps["onChange"] = useCallback(
        (value) => {
            setProps({ value });
        },
        [setProps]
    );

    return (
        // @ts-expect-error TODO why is this asking for all props?
        <AntSegmented
            className={class_name}
            onChange={handleClick}
            {...otherProps}
        />
    );
};

export default Segmented;
