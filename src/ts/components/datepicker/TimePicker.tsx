import React from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { TimePicker as AntTimePicker, DatePickerProps } from "antd";
import moment from "moment";

type Props = {
    /**
     * If allow to remove input content with clear icon
     */
    allow_clear?: boolean;
    /**
     * Whether has border style
     */
    bordered?: boolean;
    /**
     * Disables all checkboxes within the group
     */
    disabled?: boolean;
    /**
     * Time format - e.g. HH:mm:ss
     */
    format?: string;
    /**
     * Interval between hours in picker
     */
    hour_step?: number;
    /**
     * Interval between minutes in picker
     */
    minute_step?: number;
    /**
     * The open state of picker
     */
    open?: boolean;
    /**
     * 	Set picker type
     */
    picker?: "date" | "week" | "month" | "quarter" | "year";
    /**
     * The placeholder of date input
     */
    placeholder?: string;
    /**
     * The position where the selection box pops up
     */
    placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    /**
     * Interval between seconds in picker
     */
    second_step?: number;
    /**
     * 	Whether to show 'Now' button on panel when show_time is set
     */
    show_now?: boolean;
    /**
     * To determine the size of the input box, the height of large and small,
     * are 40px and 24px respectively, while default size is 32px
     */
    size?: "large" | "middle" | "small";
    /**
     * Set validation status
     */
    status?: "error" | "warning";
    /**
     * The selected time
     */
    value?: string;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Select Date or DateTime
 */
const TimePicker = (props: Props) => {
    const {
        allow_clear,
        disabled,
        value,
        hour_step,
        minute_step,
        second_step,
        show_now,
        setProps,
        ...otherProps
    } = props;

    const handleOpenChange: DatePickerProps["onOpenChange"] = (open) => {
        if (!disabled && setProps) {
            setProps({ open });
        }
    };

    const handleChange: DatePickerProps["onChange"] = (_value, dateString) => {
        if (!disabled && setProps) {
            setProps({ value: dateString });
        }
    };

    return (
        <AntTimePicker
            allowClear={allow_clear}
            value={moment(value)}
            hourStep={hour_step}
            minuteStep={minute_step}
            secondStep={second_step}
            showNow={show_now}
            onChange={handleChange}
            onOpenChange={handleOpenChange}
            {...otherProps}
        />
    );
};

TimePicker.defaultProps = {};

export default TimePicker;
