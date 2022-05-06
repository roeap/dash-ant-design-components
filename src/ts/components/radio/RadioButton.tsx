import React, { ReactNode } from "react";
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
    const { children, class_name, setProps, ...otherProps } = props;

    const handleChange: RadioProps["onChange"] = (e) =>
        setProps({ checked: e.target.checked });

    return (
        <Button className={class_name} onChange={handleChange} {...otherProps}>
            {children}
        </Button>
    );
};

RadioButton.defaultProps = { checked: false };

export default RadioButton;
