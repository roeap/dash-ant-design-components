import React, { useEffect, useRef } from "react";
import { InputNumber as AntInputNumber } from "antd";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../types";
import { isNil, omit } from "ramda";
import isNumeric from "fast-isnumeric";

const convert = (val) => (isNumeric(val) ? +val : NaN);
const isEquivalent = (v1, v2) => v1 === v2 || (isNaN(v1) && isNaN(v2));

type Props = {
    /**
     * The label text displayed after (on the right side of) the input field
     */
    addon_after?: string;
    /**
     * The label text displayed before (on the left side of) the input field
     */
    addon_before?: string;
    /**
     * Whether has border style
     */
    bordered?: boolean;
    /**
     * 	Whether to show +- controls
     */
    controls?: boolean;
    /**
     * If true, changes to input will be sent back to the Dash server
     * only when the enter key is pressed or when the component loses
     * focus.  If it's false, it will sent the value back on every
     * change.
     */
    debounce: boolean;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * The max value
     */
    max?: number;
    /**
     * The min value
     */
    min?: number;
    /**
     * The precision of input value
     */
    precision?: number;
    /**
     * If readonly the input
     */
    read_only?: boolean;
    /**
     * Set validation status
     */
    status?: "error" | "warning";
    /**
     * The prefix icon for the Input
     */
    prefix?: string;
    /**
     * The height of input box
     */
    size?: "large" | "middle" | "small";
    /**
     * The number to which the current value is increased or decreased. It can be an integer or decimal
     */
    step?: number | string;
    /**
     * Set value as string to support high precision decimals
     */
    string_mode?: boolean;
    /**
     * The current value
     */
    value?: number;
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
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

type PayloadType = {
    value?: number | string;
    n_blur?: number;
    n_blur_timestamp?: number;
    n_submit?: number;
    n_submit_timestamp?: number;
};

/**
 * InputNumber
 */
const InputNumber = (props: Props) => {
    const {
        addon_after,
        addon_before,
        class_name,
        debounce,
        n_blur,
        n_submit,
        value,
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
    }, [value]);

    const onEvent = (payload: PayloadType = {}) => {
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
        <AntInputNumber
            ref={inputRef}
            addonAfter={addon_after}
            addonBefore={addon_before}
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

InputNumber.defaultProps = {
    n_blur: 0,
    n_blur_timestamp: -1,
    n_submit: 0,
    n_submit_timestamp: -1,
    debounce: false,
};

export default InputNumber;
