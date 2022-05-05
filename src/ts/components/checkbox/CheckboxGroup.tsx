import React, { useCallback } from "react";
import { DashComponentProps } from "../../props";
import { Checkbox } from "antd";

const { Group } = Checkbox;

type Option = {
    label: string;
    value: string;
    disabled?: boolean;
    style?: object;
};

type Props = {
    /**
     * Currently selected values
     */
    value: string[];
    /**
     * All options within the CheckboxGroup
     */
    options: string[] | number[] | Option[];
    /**
     * Disables all checkboxes within the group
     */
    disabled?: boolean;
    /**
     * Defines CSS styles which will override styles previously set.
     */
    style?: object;
    /**
     * Often used with CSS to style elements with common properties.
     */
    class_name?: string;
} & DashComponentProps;

/**
 * A collection of Checkboxes.
 */
const CheckboxGroup = (props: Props) => {
    const { class_name, setProps, ...otherProps } = props;

    const onChange = useCallback(
        (checkedValues) => setProps({ value: checkedValues }),
        [setProps]
    );
    return <Group className={class_name} onChange={onChange} {...otherProps} />;
};

CheckboxGroup.defaultProps = {
    options: [],
    value: [],
};

export default CheckboxGroup;
