import React, { ReactNode } from "react";
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
    const { children, checked, class_name, setProps, ...otherProps } = props;

    const handleClick: RadioProps["onClick"] = () =>
        setProps({ checked: !checked });

    return (
        <AntRadio
            className={class_name}
            checked={checked}
            onClick={handleClick}
            {...otherProps}
        >
            {children}
        </AntRadio>
    );
};

Radio.defaultProps = { checked: false };

export default Radio;
