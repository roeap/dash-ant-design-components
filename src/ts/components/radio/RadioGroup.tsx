import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Radio } from "antd";
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
} & DashComponentProps &
    StyledComponentProps;

/**
 * RadioGroup
 */
const RadioGroup = (props: Props) => {
    const { children, button_style, option_type, ...otherProps } = props;
    return (
        <Group
            buttonStyle={button_style}
            optionType={option_type}
            {...omit(["setProps"], otherProps)}
        >
            {children}
        </Group>
    );
};

RadioGroup.defaultProps = {};

export default RadioGroup;
