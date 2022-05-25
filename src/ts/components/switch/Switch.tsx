import React from "react";
import {
    DashComponentProps,
    StyledComponentProps,
    DashLoadingState,
} from "../../types";
import { Switch as AntSwitch } from "antd";

type Props = {
    /**
     * Specifies whether the radio is selected
     */
    checked?: boolean;
    /**
     * Disable radio
     */
    disabled?: boolean;
    /**
     * The size of the Switch
     */
    size?: "default" | "small";
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Switching Selector.
 */
const Switch = (props: Props) => {
    const { class_name, loading_state, setProps, ...otherProps } = props;

    const onChange = (checked: boolean) => {
        setProps({ checked });
    };

    return (
        <AntSwitch
            className={class_name}
            onChange={onChange}
            loading={(loading_state && loading_state.is_loading) || undefined}
            {...otherProps}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
};

export default Switch;
