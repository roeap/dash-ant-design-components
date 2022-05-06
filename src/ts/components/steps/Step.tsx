import React, { ReactNode, Fragment } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";

export type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
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
    icon?: string;
    /**
     * To specify the status. It will be automatically set by current of Steps if not configured
     */
    status?: "wait" | "process" | "finish" | "error";
    /**
     * Subtitle of the step
     */
    sub_title?: string;
    /**
     * Title of the step
     */
    title?: string;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Step
 */
const Step = (props: Props) => {
    const { children } = props;
    return <Fragment>{children}</Fragment>;
};

Step.defaultProps = {};

export default Step;
