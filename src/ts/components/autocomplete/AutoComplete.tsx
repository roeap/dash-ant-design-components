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
    allowClear: boolean;
    /**
     * If get focus when component mounted
     */
    autoFocus: boolean;
    /**
     * If backfill selected item the input when using keyboard
     */
    backfill: boolean;
    /**
     * Whether active first option by default
     */
    defaultActiveFirstOption?: boolean;
    /**
     * Initial open state of dropdown
     */
    defaultOpen?: boolean;
    /**
     * Initial selected option
     */
    defaultValue?: string;
    /**
     * Whether disabled select
     */
    disabled: boolean;
    /**
     * The className of dropdown menu
     */
    popupClassName?: string;
    /**
     * Determine whether the dropdown menu and the select input are the same width.
     * Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll
     */
    dropdownMatchSelectWidth: boolean | number;
    /**
     * If true, filter options by input, if function, filter options against it. The function will receive two arguments,
     * inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded
     */
    filterOption: boolean;
    /**
     * Specify content to show when no result matches
     */
    notFoundContent: string;
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
    n_onBlur: number;
    /**
     * Called when selecting an option or changing an input value
     */
    n_onChange: number;
    /**
     * Call when dropdown open
     */
    n_onDropdownVisibleChange: number;
    /**
     * Called when entering the component
     */
    n_onFocus: number;
    /**
     * Called when searching items
     */
    n_onSearch: number;
    /**
     * Called when a option is selected. param is option's value and option instance
     */
    n_onSelect: number;
    /**
     * Called when a option is selected. param is option's value and option instance
     */
    n_onClear: number;

} & DashComponentProps &
    StyledComponentProps;

/**
 * Alert component for feedback.
 */
const AutoComplete = (props: Props) => {
    const {
        children,
        setProps,
        n_onBlur,
        n_onChange,
        n_onDropdownVisibleChange,
        n_onFocus,
        n_onSearch,
        n_onSelect,
        n_onClear,
        ...otherProps
    } = props;

    const onBlur = () => {
        if (setProps) {
            setProps({
                n_onBlur: n_onBlur + 1,
            });
        }
    };

    const onChange = (value) => {
        if (setProps) {
            setProps({
                value: value,
                n_onChange: n_onChange + 1,
            });
        }
    };

    const onDropdownVisibleChange = () => {
        if (setProps) {
            setProps({
                n_onDropdownVisibleChange: n_onDropdownVisibleChange + 1,
            });
        }
    };

    const onFocus = () => {
        if (setProps) {
            setProps({
                n_onFocus: n_onFocus + 1,
            });
        }
    };

    const onSearch = (value) => {
        if (setProps) {
            setProps({
                value: value,
                n_onSearch: n_onSearch + 1,
            });
        }
    };

    const onSelect = (value, option) => {
        if (setProps) {
            setProps({
                value: value,
                n_onSelect: n_onSelect + 1,
            });
        }
    };

    const onClear = () => {
        if (setProps) {
            setProps({
                value: '',
                n_onClear: n_onClear + 1,
            });
        }
    };

    return (

        <AntAutoComplete
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
    allowClear: false,
    autoFocus: false,
    backfill: false,
    defaultActiveFirstOption: true,
    disabled: false,
    dropdownMatchSelectWidth: true,
    filterOption: true,
    notFoundContent: 'Not Found',
    n_onBlur: 0,
    n_onChange: 0,
    n_onDropdownVisibleChange: 0,
    n_onFocus: 0,
    n_onSearch: 0,
    n_onSelect: 0,
    n_onClear: 0,
};

export default AutoComplete;
