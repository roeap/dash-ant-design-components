import React, { ReactNode, useCallback } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Radio, RadioProps } from "antd";

const { Button } = Radio;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Specifies whether the radio is selected
     */
    checked?: boolean;
    /**
     * Disable radio
     */
    disabled?: boolean;
} & DashComponentProps &
    StyledComponentProps;
/**
 * RadioButton
 */
const RadioButton = (props: Props) => {
    const { children, checked, disabled, class_name, setProps, ...otherProps } =
        props;

    const onClick: RadioProps["onClick"] = useCallback(() => {
        if (!disabled && setProps) {
            setProps({ checked: !checked });
        }
    }, [setProps, checked, disabled]);

    return (
        <Button
            className={class_name}
            checked={checked}
            disabled={disabled}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </Button>
    );
};

RadioButton.defaultProps = { checked: false };

export default RadioButton;
