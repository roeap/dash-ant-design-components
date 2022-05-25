import React from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Slider as AntSlider } from "antd";

type Props = {
    /**
     * Disable radio
     */
    disabled?: boolean;
    /**
     * Tick mark of Slider, type of key must be number, and must in closed interval
     * [min, max], each mark can declare its own style
     */
    marks?:
        | { [key: number]: string }
        | { [key: number]: { label: string; style: object } };
    /**
     * The maximum value the slider can slide to
     */
    max: number;
    /**
     * The minimum value the slider can slide to
     */
    min: number;
    /**
     * Dual thumb mode
     */
    range?: boolean;
    /**
     * 	Reverse the component
     */
    reverse?: boolean;
    /**
     * The granularity the slider can step through values.
     * Must greater than 0, and be divided by (max - min). When marks no null, step can be null
     */
    step?: number;
    /**
     * The value of slider. When range is false, use number, otherwise, use [number, number]
     */
    value?: number | [number, number];
    /**
     * If true, the slider will be vertical
     */
    vertical?: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A Slider component for displaying current value and intervals in range.
 */
const Slider = (props: Props) => {
    const { class_name, setProps, ...otherProps } = props;

    const onChange = (value: number | [number, number]) => {
        setProps({ value });
    };

    return (
        // @ts-expect-error we use only boolean range prop.
        <AntSlider className={class_name} onChange={onChange} {...otherProps} />
    );
};

Slider.defaultProps = {
    min: 0,
    max: 100,
};

export default Slider;
