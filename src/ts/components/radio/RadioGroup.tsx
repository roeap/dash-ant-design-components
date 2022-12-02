import React, { ReactNode, useCallback } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Radio, RadioChangeEvent } from "antd";
import { omit } from "ramda";

const { Group } = Radio;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * The style type of radio button
     */
    button_style?: "outline" | "solid";
    /**
     * Disable all radio buttons
     */
    disabled?: boolean;
    /**
     * Set children optional
     */
    options?:
        | string[]
        | number[]
        | Array<{ label: string; value: string; disabled?: boolean }>;
    /**
     * Set Radio optionType
     */
    option_type?: "default" | "button";
    /**
     * The size of radio button
     */
    size?: "large" | "middle" | "small";
    /**
     * Used for setting the currently selected value
     */
    value?: string | number;
} & DashComponentProps &
    StyledComponentProps;

/**
 * RadioGroup
 */
const RadioGroup = (props: Props) => {
    const {
        children,
        button_style,
        disabled,
        option_type,
        setProps,
        ...otherProps
    } = props;

    const onChange = useCallback(
        (e: RadioChangeEvent) => {
            if (!disabled && setProps) {
                setProps({ value: e.target.value });
            }
        },
        [setProps, disabled]
    );

    return (
        <Group
            buttonStyle={button_style}
            optionType={option_type}
            disabled={disabled}
            onChange={onChange}
            {...omit(["setProps"], otherProps)}
        >
            {children}
        </Group>
    );
};

RadioGroup.defaultProps = {};

export default RadioGroup;
