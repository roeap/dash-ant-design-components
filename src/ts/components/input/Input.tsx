import React, { ReactNode, useEffect, useRef } from "react";
import { DashComponentProps, DashLoadingState } from "../../types";
import { Input as AntInput } from "antd";
import { isNil, omit } from "ramda";
import isNumeric from "fast-isnumeric";

const convert = (val) => (isNumeric(val) ? +val : NaN);
const isEquivalent = (v1, v2) => v1 === v2 || (isNaN(v1) && isNaN(v2));

type Props = {
    /**
     * The input content value
     */
    value?: string | number;
    /**
     * The label text displayed after (on the right side of) the input field
     */
    addon_after?: ReactNode;
    /**
     * The label text displayed before (on the left side of) the input field
     */
    addon_before?: ReactNode;
    /**
     * If allow to remove input content with clear icon
     */
    allow_clear?: boolean;
    /**
     * This attribute indicates whether the value of the control can be
     * automatically completed by the browser.
     */
    autocomplete?: "on" | "off";
    /**
     * Whether has border style
     */
    bordered?: boolean;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * The maximum (numeric or date-time) value for this item, which must not be
     * less than its minimum (min attribute) value.
     */
    max?: string | number;
    /**
     * The minimum (numeric or date-time) value for this item, which must not be
     * greater than its maximum (max attribute) value.
     */
    min?: string | number;
    /**
     * The max length
     */
    max_length?: number;
    /**
     * Indicates whether the element can be edited.
     */
    readonly?: boolean;
    /**
     * Whether show character count
     */
    show_count?: boolean;
    /**
     * The size of the input box
     */
    size?: "large" | "middle" | "small";
    /**
     * Number of times the input lost focus.
     */
    n_blur: number;
    /**
     * Last time the input lost focus.
     */
    n_blur_timestamp: number;
    /**
     * Number of times the `Enter` key was pressed while the input had focus.
     */
    n_submit: number;
    /**
     * Last time that `Enter` was pressed.
     */
    n_submit_timestamp: number;
    /**
     * If true, changes to input will be sent back to the Dash server
     * only when the enter key is pressed or when the component loses
     * focus.  If it's false, it will sent the value back on every
     * change.
     */
    debounce: boolean;
    /**
     * The type of control to render
     */
    type?:
        | "text"
        | "number"
        | "password"
        | "email"
        | "range"
        | "search"
        | "tel"
        | "url"
        | "hidden";
    /**
     * Set validation status
     */
    status?: "error" | "warning";
    /**
     * Defines CSS styles which will override styles previously set.
     */
    style?: object;
    /**
     * A hint to the user of what can be entered in the control.
     */
    placeholder?: string;
    /**
     * Often used with CSS to style elements with common properties.
     */
    class_name?: string;
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps;

type PayloadType = {
    value?: number | string;
    n_blur?: number;
    n_blur_timestamp?: number;
    n_submit?: number;
    n_submit_timestamp?: number;
};

/**
 * A basic widget for getting the user input is a text field.
 * Keyboard and mouse can be used for providing or changing data.
 */
const Input = (props: Props) => {
    const {
        addon_after,
        addon_before,
        allow_clear,
        max_length,
        show_count,
        class_name,
        debounce,
        n_blur,
        n_submit,
        value,
        type,
        loading_state,
        setProps,
        ...otherProps
    } = props;
    const inputRef = useRef(null);

    const onChange = () => {
        if (!debounce) {
            onEvent();
        }
    };

    useEffect(() => {
        if (type === "number") {
            const inputValue = inputRef.current.input.value;
            const inputValueAsNumber = inputRef.current.input.checkValidity()
                ? convert(inputValue)
                : NaN;
            const valueAsNumber = convert(value);

            if (!isEquivalent(valueAsNumber, inputValueAsNumber)) {
                inputRef.current.input.value = isNil(valueAsNumber)
                    ? valueAsNumber
                    : value;
            }
        } else {
            const inputValue = inputRef.current.input.value;

            if (value !== inputValue) {
                inputRef.current.input.value =
                    value !== null && value !== undefined ? value : "";
            }
        }
    }, [value]);

    const onEvent = (payload: PayloadType = {}) => {
        if (type === "number") {
            const inputValue = inputRef.current.input.value;
            const inputValueAsNumber = inputRef.current.input.checkValidity()
                ? convert(inputValue)
                : NaN;
            const valueAsNumber = convert(value);

            if (!isEquivalent(valueAsNumber, inputValueAsNumber)) {
                setProps({ ...payload, value: inputValueAsNumber });
            } else if (Object.keys(payload).length) {
                setProps(payload);
            }
        } else {
            payload.value = inputRef.current.input.value;
            setProps(payload);
        }
    };

    const onBlur = () => {
        if (setProps) {
            const payload = {
                n_blur: n_blur + 1,
                n_blur_timestamp: Date.now(),
            };
            if (debounce) {
                onEvent(payload);
            } else {
                setProps(payload);
            }
        }
    };

    const onKeyPress = (e) => {
        if (setProps && e.key === "Enter") {
            const payload = {
                n_submit: n_submit + 1,
                n_submit_timestamp: Date.now(),
            };
            if (debounce) {
                onEvent(payload);
            } else {
                setProps(payload);
            }
        }
    };

    return (
        <AntInput
            ref={inputRef}
            type={type}
            addonAfter={addon_after}
            addonBefore={addon_before}
            allowClear={allow_clear}
            maxLength={max_length}
            showCount={show_count}
            className={class_name}
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            {...omit(["n_blur_timestamp", "n_submit_timestamp"], otherProps)}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
};

Input.defaultProps = {
    n_blur: 0,
    n_blur_timestamp: -1,
    n_submit: 0,
    n_submit_timestamp: -1,
    debounce: false,
};

export default Input;
