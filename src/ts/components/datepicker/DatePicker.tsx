import React from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { DatePicker as AntDatePicker, DatePickerProps } from "antd";
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
     * Whether to provide an additional time selection
     */
    show_time?: boolean;
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
     * The selected date / datetime
     */
    value?: string;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Select Date or DateTime
 */
const DatePicker = (props: Props) => {
    const {
        allow_clear,
        disabled,
        picker,
        value,
        show_time,
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
        <AntDatePicker
            allowClear={allow_clear}
            value={moment(value)}
            picker={picker}
            showTime={show_time}
            showNow={show_now}
            onChange={handleChange}
            onOpenChange={handleOpenChange}
            {...otherProps}
        />
    );
};

DatePicker.defaultProps = {};

export default DatePicker;
