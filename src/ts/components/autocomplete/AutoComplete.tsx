import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { AutoComplete as AntAutoComplete } from "antd";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Show clear button
     */
    allow_clear: boolean;
    /**
     * If get focus when component mounted
     */
    auto_focus: boolean;
    /**
     * If backfill selected item the input when using keyboard
     */
    backfill: boolean;
    /**
     * Whether active first option by default
     */
    default_active_first_option?: boolean;
    /**
     * Initial open state of dropdown
     */
    default_open?: boolean;
    /**
     * Initial selected option
     */
    default_value?: string;
    /**
     * Whether disabled select
     */
    disabled: boolean;
    /**
     * The className of dropdown menu
     */
    popup_class_name?: string;
    /**
     * Determine whether the dropdown menu and the select input are the same width.
     * Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll
     */
    dropdown_match_select_width: boolean | number;
    /**
     * If true, filter options by input, if function, filter options against it. The function will receive two arguments,
     * inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded
     */
    filter_option: boolean;
    /**
     * Specify content to show when no result matches
     */
    not_found_content: string;
    /**
     * Controlled open state of dropdown
     */
    open?: boolean;
    /**
     * Select options. Will get better perf than jsx definition
     */
    options?: Array<{
        label: string;
        value: string;
    }>;
    /**
     * The placeholder of input
     */
    placeholder?: string;
    /**
     * Set validation status
     */
    status?: "error" | "warning";
    /**
     * Selected option
     */
    value?: string;
    /**
     * Called when leaving the component
     */
    n_blur: number;
    /**
     * Called when selecting an option or changing an input value
     */
    n_change: number;
    /**
     * Call when dropdown open
     */
    n_dropdown_visible_change: number;
    /**
     * Called when entering the component
     */
    n_focus: number;
    /**
     * Called when searching items
     */
    n_search: number;
    /**
     * Called when a option is selected. param is option's value and option instance
     */
    n_select: number;
    /**
     * Called when a option is selected. param is option's value and option instance
     */
    n_clear: number;

} & DashComponentProps &
    StyledComponentProps;

/**
 * Alert component for feedback.
 */
const AutoComplete = (props: Props) => {
    const {
        children,
        allow_clear,
        auto_focus,
        default_active_first_option,
        default_open,
        default_value,
        popup_class_name,
        dropdown_match_select_width,
        filter_option,
        not_found_content,
        setProps,
        n_blur,
        n_change,
        n_dropdown_visible_change,
        n_focus,
        n_search,
        n_select,
        n_clear,
        ...otherProps
    } = props;

    const onBlur = () => {
        if (setProps) {
            setProps({
                n_onBlur: n_blur + 1,
            });
        }
    };

    const onChange = (value) => {
        if (setProps) {
            setProps({
                value: value,
                n_onChange: n_change + 1,
            });
        }
    };

    const onDropdownVisibleChange = () => {
        if (setProps) {
            setProps({
                n_onDropdownVisibleChange: n_dropdown_visible_change + 1,
            });
        }
    };

    const onFocus = () => {
        if (setProps) {
            setProps({
                n_onFocus: n_focus + 1,
            });
        }
    };

    const onSearch = (value) => {
        if (setProps) {
            setProps({
                value: value,
                n_onSearch: n_search + 1,
            });
        }
    };

    const onSelect = (value, option) => {
        if (setProps) {
            setProps({
                value: value,
                n_onSelect: n_select + 1,
            });
        }
    };

    const onClear = () => {
        if (setProps) {
            setProps({
                value: '',
                n_onClear: n_clear + 1,
            });
        }
    };

    return (

        <AntAutoComplete
            allowClear={allow_clear}
            autoFocus={auto_focus}
            defaultActiveFirstOption={default_active_first_option}
            defaultOpen={default_open}
            defaultValue={default_value}
            popupClassName={popup_class_name}
            dropdownMatchSelectWidth={dropdown_match_select_width}
            filterOption={filter_option}
            notFoundContent={not_found_content}
            onBlur={onBlur}
            onChange={onChange}
            onDropdownVisibleChange={onDropdownVisibleChange}
            onFocus={onFocus}
            onSearch={onSearch}
            onSelect={onSelect}
            onClear={onClear}
            {...otherProps}
        >
            {children}
        </AntAutoComplete>
    );
};

AutoComplete.defaultProps = {
    allow_clear: false,
    auto_focus: false,
    backfill: false,
    default_active_first_option: true,
    disabled: false,
    dropdown_match_select_width: true,
    filter_option: true,
    not_found_content: 'Not Found',
    n_blur: 0,
    n_change: 0,
    n_dropdown_visible_change: 0,
    n_focus: 0,
    n_search: 0,
    n_select: 0,
    n_clear: 0,
};

export default AutoComplete;
