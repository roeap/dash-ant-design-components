import React, { ReactNode, useCallback } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Radio as AntRadio, RadioProps } from "antd";

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
 * Radio
 */
const Radio = (props: Props) => {
    const { children, checked, disabled, class_name, setProps, ...otherProps } =
        props;

    const handleClick: RadioProps["onClick"] = useCallback(() => {
        if (!disabled && setProps) {
            setProps({ checked: !checked });
        }
    }, [setProps, checked, disabled]);

    return (
        <AntRadio
            className={class_name}
            checked={checked}
            disabled={disabled}
            onClick={handleClick}
            {...otherProps}
        >
            {children}
        </AntRadio>
    );
};

Radio.defaultProps = { checked: false };

export default Radio;
