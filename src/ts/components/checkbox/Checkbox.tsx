import React, { ReactNode, useCallback } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Checkbox as AntCheckbox, CheckboxProps } from "antd";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Whether the checkbox is selected
     */
    checked?: boolean;
    /**
     * Whether the checkbox is disabled
     */
    disabled: boolean;
    /**
     * Whether the checkbox is indeterminate
     */
    indeterminate: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Checkbox component.
 */
const Checkbox = (props: Props) => {
    const {
        id,
        children,
        class_name,
        checked,
        disabled,
        indeterminate,
        setProps,
    } = props;

    const onChange: CheckboxProps["onChange"] = useCallback(
        (e) => {
            setProps({
                checked: e.target.checked,
                indeterminate: typeof e.target.checked === "undefined",
            });
        },
        [setProps]
    );

    return (
        <AntCheckbox
            id={id}
            className={class_name}
            checked={checked}
            indeterminate={indeterminate}
            disabled={disabled}
            onChange={onChange}
        >
            {children}
        </AntCheckbox>
    );
};

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
};

export default Checkbox;
