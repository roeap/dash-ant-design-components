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
    const { children, class_name, setProps, ...otherProps } = props;

    const handleChange: RadioProps["onChange"] = (e) =>
        setProps({ checked: e.target.checked });

    return (
        <AntRadio
            className={class_name}
            onChange={handleChange}
            {...otherProps}
        >
            {children}
        </AntRadio>
    );
};

Radio.defaultProps = { checked: false };

export default Radio;
