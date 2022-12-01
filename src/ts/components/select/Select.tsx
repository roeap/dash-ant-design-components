import React, { useCallback } from "react";
import { Select as AntSelect, SelectProps } from "antd";
import { LabeledValue } from "antd/lib/select";
import Icon from "../icon/Icon";
import { omit } from "ramda";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../types";

type Props = {
    /**
     * Show clear button
     */
    allow_clear?: boolean;
    /**
     * Whether the current search will be cleared on selecting an item.
     * Only applies when mode is set to multiple or tags
     */
    auto_clear_search_value?: boolean;
    /**
     * Whether has border style
     */
    bordered?: boolean;
    /**
     * The custom clear icon
     */
    clear_icon?: string;
    /**
     * Whether to activate first option by default
     */
    default_active_first_option?: boolean;
    // /**
    //  * Initial open state of dropdown
    //  */
    // defaultOpen?: boolean;
    // /**
    //  * Initial selected option
    //  */
    // defaultValue?:
    //     | string
    //     | string[]
    //     | number
    //     | number[]
    //     | LabeledValue
    //     | LabeledValue[];
    /**
     * Whether disabled select
     */
    disabled?: boolean;
    /**
     *  The className of dropdown menu
     */
    dropdown_class_name?: string;
    /**
     * Determine whether the dropdown menu and the select input are the same width.
     * Default set min-width same as input. Will ignore when value less than
     * select width false will disable virtual scroll
     */
    dropdown_match_select_width?: boolean | number;
    /**
     * The style of dropdown menu
     */
    dropdown_style?: object;
    /**
     * Customize node label, value, options field name
     */
    fieldNames?: object; // { label: label, value: value, options: options }	4.17.0
    /**
     * If true, filter options by input
     */
    filter_option?: boolean;
    /**
     * Whether to embed label in value, turn the format of value from string to { value: string, label: ReactNode }
     */
    label_in_value?: boolean;
    /**
     * Config popup height
     */
    list_height?: number;
    /**
     * Indicate loading state
     */
    loading?: boolean;
    /**
     * Max tag count to show. responsive will cost render performance
     */
    max_tag_count?: number | "responsive";
    /**
     * Max tag text length to show
     */
    max_tag_text_length?: number;
    /**
     * The custom menuItemSelected icon with multiple options
     */
    menu_item_selected_icon?: string;
    /**
     * Set mode of Select
     */
    mode?: "multiple" | "tags";
    /**
     * Controlled open state of dropdown
     */
    open?: boolean;
    /**
     * Which prop value of option will be used for filter if filterOption is true.
     * If options is set, it should be set to 'label'
     */
    option_filter_prop?: string;
    /**
     * Which prop value of option will render as content of select.
     */
    option_label_prop?: string;
    /**
     * Select options. Will get better perf than jsx definition	{ label, value }[]
     */
    options?: object[];
    /**
     * Placeholder of select
     */
    placeholder?: string;
    /**
     * The position where the selection box pops up
     */
    placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
    /**
     * The custom remove icon
     */
    remove_icon?: string;
    /**
     * Whether to show the drop-down arrow
     */
    show_arrow?: boolean;
    /**
     * Whether show search input in single mode
     */
    show_search?: boolean;
    /**
     * Size of Select input
     */
    size?: "large" | "middle" | "small";
    /**
     * Set validation status
     */
    status?: "error" | "warning";
    /**
     * The custom suffix icon
     */
    suffix_icon?: string;
    /**
     * Separator used to tokenize, only applies when mode="tags"
     */
    token_separators?: string[];
    /**
     * Current selected option (considered as a immutable array)
     */
    value?:
        | string
        | string[]
        | number
        | number[]
        | LabeledValue
        | LabeledValue[];
    /**
     * Disable virtual scroll when set to false
     */
    virtual?: boolean;
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
     * Number of times the `Enter` key was pressed while the input had focus.
     */
    n_submit: number;
    /**
     * Last time that `Enter` was pressed.
     */
    n_submit_timestamp: number;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A dropdown component
 */
const Select = (props: Props) => {
    const {
        allow_clear,
        auto_clear_search_value,
        class_name,
        clear_icon,
        default_active_first_option,
        dropdown_class_name,
        dropdown_match_select_width,
        dropdown_style,
        filter_option,
        label_in_value,
        list_height,
        loading,
        loading_state,
        max_tag_count,
        max_tag_text_length,
        menu_item_selected_icon,
        option_filter_prop,
        option_label_prop,
        remove_icon,
        show_arrow,
        show_search,
        suffix_icon,
        token_separators,
        n_blur,
        n_submit,
        open,
        disabled,
        setProps,
        ...otherProps
    } = props;

    const handleBlur: SelectProps["onBlur"] = useCallback(() => {
        if (!disabled && setProps) {
            setProps({
                n_blur: n_blur + 1,
                n_blur_timestamp: Date.now(),
            });
        }
    }, [setProps, n_blur, disabled]);

    const handleDropdownVisibleChange: SelectProps["onDropdownVisibleChange"] =
        useCallback(
            (open) => {
                if (!disabled && setProps) {
                    setProps({ open });
                }
            },
            [setProps, disabled]
        );

    const handleChange: SelectProps["onChange"] = useCallback(
        (value) => {
            if (!disabled && setProps) {
                setProps({ value });
            }
        },
        [setProps, disabled]
    );

    const handleKeyPress: SelectProps["onInputKeyDown"] = useCallback(
        (e) => {
            if (!disabled && setProps && e.key === "Enter") {
                setProps({
                    n_submit: n_submit + 1,
                    n_submit_timestamp: Date.now(),
                });
            }
        },
        [setProps, n_submit, disabled]
    );

    return (
        <AntSelect
            allowClear={allow_clear}
            autoClearSearchValue={auto_clear_search_value}
            className={class_name}
            clearIcon={clear_icon && Icon({ icon_name: clear_icon })}
            defaultActiveFirstOption={default_active_first_option}
            dropdownClassName={dropdown_class_name}
            dropdownMatchSelectWidth={dropdown_match_select_width}
            dropdownStyle={dropdown_style}
            /* fieldNames */
            filterOption={filter_option}
            labelInValue={label_in_value}
            listHeight={list_height}
            loading={loading || (loading_state && loading_state.is_loading)}
            maxTagCount={max_tag_count}
            maxTagTextLength={max_tag_text_length}
            menuItemSelectedIcon={
                menu_item_selected_icon &&
                Icon({ icon_name: menu_item_selected_icon })
            }
            optionFilterProp={option_filter_prop}
            optionLabelProp={option_label_prop}
            removeIcon={remove_icon && Icon({ icon_name: remove_icon })}
            showArrow={show_arrow}
            showSearch={show_search}
            suffixIcon={suffix_icon && Icon({ icon_name: suffix_icon })}
            tokenSeparators={token_separators}
            open={open}
            onBlur={handleBlur}
            onChange={handleChange}
            onDropdownVisibleChange={handleDropdownVisibleChange}
            onInputKeyDown={handleKeyPress}
            disabled={disabled}
            // @ts-expect-error this is an object after all
            {...omit(["n_blur_timestamp", "n_submit_timestamp"], otherProps)}
        />
    );
};

Select.defaultProps = {
    n_blur: 0,
    n_blur_timestamp: -1,
    n_submit: 0,
    n_submit_timestamp: -1,
};

export default Select;
