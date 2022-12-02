import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Steps as AntSteps } from "antd";

type StepItem = {
    /**
     * Description of the step
     */
    description?: string;
    /**
     * Disable click
     */
    disabled?: boolean;
    /**
     * Icon of the step
     */
    icon: ReactNode;
    /**
     * To specify the status. It will be automatically set by current of Steps if not configured.
     */
    status?: "wait" | "process" | "finish" | "error";
    /**
     * Subtitle of the step
     */
    subTitle?: ReactNode;
    /**
     * Title of the step
     */
    title?: ReactNode;
};

type Props = {
    children?: ReactNode;
    /**
     * The children of this component.
     */
    items: StepItem[];
    /**
     * To set the current step, counting from 0. You can overwrite this state by using status of Step
     */
    current?: number;
    /**
     * To specify the direction of the step bar, horizontal or vertical
     */
    direction?: "horizontal" | "vertical";
    /**
     * Set the initial step, counting from 0
     */
    initial?: number;
    /**
     * Place title and description with horizontal or vertical direction
     */
    label_placement?: "horizontal" | "vertical";
    /**
     * Progress circle percentage of current step in process status (only works on basic Steps)
     */
    percent?: number;
    /**
     * Steps with progress dot style
     */
    progress_dot?: boolean;
    /**
     * Change to vertical direction when screen width smaller than 532px
     */
    responsive?: boolean;
    /**
     * To specify the size of the step bar
     */
    size?: "default" | "small";
    /**
     * Specify the status of current step
     */
    status?: "wait" | "process" | "finish" | "error";
    /**
     * Type of steps
     */
    type?: "default" | "navigation";
} & DashComponentProps &
    StyledComponentProps;

/**
 * Steps
 */
const Steps = (props: Props) => {
    const { children, label_placement, progress_dot, setProps, ...otherProps } =
        props;

    const onChange = (current: number) => {
        if (setProps) {
            setProps({ current });
        }
    };

    return (
        <AntSteps
            labelPlacement={label_placement}
            progressDot={progress_dot}
            onChange={onChange}
            {...otherProps}
        >
            {children}
        </AntSteps>
    );
};

Steps.defaultProps = {};

export default Steps;
