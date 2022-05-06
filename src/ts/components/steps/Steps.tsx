import React, { ReactNode, useMemo } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Steps as AntSteps } from "antd";
import { omit } from "ramda";
import { Props as StepProps } from "./Step";
import * as icons from "@ant-design/icons";
import {
    parseChildrenToArray,
    getComponentType,
    getComponentProps,
} from "../../utilities";

const { Step: AntStep } = AntSteps;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
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

    const handleChange = (current: number) => {
        if (setProps) {
            setProps({ current });
        }
    };

    const steps = useMemo(
        () =>
            parseChildrenToArray(children)
                .filter((c) => getComponentType(c) === "TabPane")
                .map((c) => {
                    const props = getComponentProps(c) as StepProps;
                    return (
                        <AntStep
                            className={props.class_name}
                            style={props.style}
                            key={props.key}
                            description={props.description}
                            disabled={props.disabled}
                            status={props.status}
                            subTitle={props.sub_title}
                            title={props.title}
                            icon={props.icon && icons[props.icon]}
                        >
                            {c}
                        </AntStep>
                    );
                }),
        [children]
    );

    return (
        <AntSteps
            labelPlacement={label_placement}
            progressDot={progress_dot}
            onChange={handleChange}
            {...otherProps}
        >
            {steps}
        </AntSteps>
    );
};

Steps.defaultProps = {};

export default Steps;
