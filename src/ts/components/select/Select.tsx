import React, {
    useCallback,
    useState,
    useEffect,
    useMemo,
    ReactNode,
} from "react";
import { Select as AntSelect, SelectProps } from "antd";
import { LabeledValue } from "antd/lib/select";
import Fuse from "fuse.js";
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
    clear_icon?: ReactNode;
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
    menu_item_selected_icon?: ReactNode;
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
    remove_icon?: ReactNode;
    /**
     * Whether to show the drop-down arrow
     */
    show_arrow?: boolean;
    /**
     * Whether show search input and filter options by text entered in field
     */
    use_search?: boolean;
    /**
     * Fields to search in documents (options). Search is based on fuse.js, with
     * corresponding field notations https://fusejs.io/examples.html
     */
    search_fields?: string[];
    /**
     * The maximum number of results to show in search
     */
    search_max_results?: number;
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
    suffix_icon?: ReactNode;
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
        use_search,
        suffix_icon,
        token_separators,
        n_blur,
        n_submit,
        open,
        disabled,
        options,
        search_fields,
        search_max_results,
        setProps,
        ...otherProps
    } = props;
    const [currentOptions, setCurrentOptions] = useState([]);

    const onSearch = useMemo(() => {
        if (!use_search) return undefined;

        const fuseOptions = {
            includeScore: true,
            keys: search_fields || ["value", "label"],
        };
        const fuse = new Fuse(options, fuseOptions);

        return (value: string) => {
            if (!value || value.length === 0) {
                setCurrentOptions(options);
            } else {
                setCurrentOptions(
                    fuse
                        .search(value, { limit: search_max_results || 10 })
                        .map((res) => res.item)
                );
            }
        };
    }, [options, use_search, search_fields, search_max_results]);

    useEffect(() => {
        setCurrentOptions(options);
    }, [options]);

    const onBlur: SelectProps["onBlur"] = useCallback(() => {
        if (!disabled && setProps) {
            setProps({
                n_blur: n_blur + 1,
                n_blur_timestamp: Date.now(),
            });
        }
    }, [setProps, n_blur, disabled]);

    const onDropdownVisibleChange: SelectProps["onDropdownVisibleChange"] =
        useCallback(
            (open) => {
                if (!disabled && setProps) {
                    setProps({ open });
                }
            },
            [setProps, disabled]
        );

    const onChange: SelectProps["onChange"] = useCallback(
        (value) => {
            if (!disabled && setProps) {
                setProps({ value });
                setCurrentOptions(options);
            }
        },
        [setProps, disabled, options]
    );

    const onKeyPress: SelectProps["onInputKeyDown"] = useCallback(
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
            clearIcon={clear_icon}
            dropdownClassName={dropdown_class_name}
            dropdownMatchSelectWidth={dropdown_match_select_width}
            dropdownStyle={dropdown_style}
            filterOption={use_search ? false : filter_option}
            labelInValue={label_in_value}
            listHeight={list_height}
            loading={loading || (loading_state && loading_state.is_loading)}
            maxTagCount={max_tag_count}
            maxTagTextLength={max_tag_text_length}
            menuItemSelectedIcon={menu_item_selected_icon}
            optionFilterProp={option_filter_prop}
            optionLabelProp={option_label_prop}
            removeIcon={remove_icon}
            showArrow={show_arrow}
            showSearch={use_search}
            suffixIcon={suffix_icon}
            tokenSeparators={token_separators}
            open={open}
            onBlur={onBlur}
            onChange={onChange}
            onSearch={onSearch}
            onDropdownVisibleChange={onDropdownVisibleChange}
            onInputKeyDown={onKeyPress}
            disabled={disabled}
            options={currentOptions}
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
