import React, { useCallback } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
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
} & DashComponentProps &
    StyledComponentProps;

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
