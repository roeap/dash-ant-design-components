import React, { useEffect, useState } from "react";
import { DashComponentProps, DashLoadingState } from "../../props";
import { omit } from "ramda";
import { Input } from "antd";

const { TextArea: AntTextArea } = Input;

type Props = {
    /**
     * The input content value
     */
    value?: string;
    /**
     * If allow to remove input content with clear icon
     */
    allow_clear?: boolean;
    /**
     * Whether has border style
     */
    bordered?: boolean;
    /**
     * Defines the number of columns in a textarea.
     */
    cols?: number;
    /**
     * The max length
     */
    max_length?: number;
    /**
     * Whether show text count
     */
    show_count?: boolean;
    /**
     * Indicates whether the element can be edited.
     */
    readonly?: boolean;
    /**
     * Defines the number of rows in a text area.
     */
    rows?: number;
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
    /**
     * Number of times the input lost focus.
     */
    n_blur: number;
    /**
     * Last time the input lost focus.
     */
    n_blur_timestamp: number;
    /**
     * Number of times the `Enter` key was pressed while the textarea had focus.
     */
    n_submit: number;
    /**
     * Last time that `Enter` was pressed.
     */
    n_submit_timestamp: number;
    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    n_clicks: number;
    /**
     * If true, changes to input will be sent back to the Dash server only on enter or when losing focus.
     * If it's false, it will sent the value back on every change.
     */
    debounce: boolean;
} & DashComponentProps;

/**
 * TextArea component.
 */
const TextArea = (props: Props) => {
    const {
        value,
        debounce,
        loading_state,
        n_blur,
        n_clicks,
        n_submit,
        setProps,
        ...otherProps
    } = props;
    const [valueState, setValueState] = useState(value || "");

    useEffect(() => {
        if (value !== valueState) {
            setValueState(value || "");
        }
    }, [value]);

    const onChange = (e) => {
        const newValue = e.target.value;
        setValueState(newValue);
        if (!debounce && setProps) {
            setProps({ value: newValue });
        }
    };

    const onBlur = () => {
        if (setProps) {
            const payload = {
                n_blur: n_blur + 1,
                n_blur_timestamp: Date.now(),
            };
            if (debounce) {
                // @ts-ignore
                payload.value = value;
            }
            setProps(payload);
        }
    };

    const onKeyPress = (e) => {
        if (setProps && e.key === "Enter") {
            const payload = {
                n_submit: n_submit + 1,
                n_submit_timestamp: Date.now(),
            };
            if (debounce) {
                // @ts-ignore
                payload.value = value;
            }
            setProps(payload);
        }
    };

    const onClick = () => {
        if (setProps) {
            setProps({
                n_clicks: n_clicks + 1,
                n_clicks_timestamp: Date.now(),
            });
        }
    };
    return (
        <AntTextArea
            value={valueState}
            onChange={onChange}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
            onClick={onClick}
            {...omit(["n_blur_timestamp", "n_submit_timestamp"], otherProps)}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
};

TextArea.defaultProps = {
    n_blur: 0,
    n_blur_timestamp: -1,
    n_submit: 0,
    n_submit_timestamp: -1,
    n_clicks: 0,
    n_clicks_timestamp: -1,
    debounce: false,
    value: "",
};

export default TextArea;
