import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Alert as AntAlert } from "antd";
import { omit } from "ramda";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Whether to show as banner
     */
    banner?: boolean;
    /**
     * Whether Alert can be closed
     */
    closable?: boolean;
    /**
     * Close text to show
     */
    close_text?: string;
    /**
     * Custom close icon
     */
    close_icon?: ReactNode;
    /**
     * Additional content of Alert
     */
    description?: string;
    /**
     * Custom icon, effective when showIcon is true
     */
    icon?: ReactNode;
    /**
     * Content of Alert
     */
    message?: string;
    /**
     * Whether to show icon
     */
    show_icon?: boolean;
    /**
     * Type of Alert
     */
    type?: "success" | "info" | "warning" | "error";
} & DashComponentProps &
    StyledComponentProps;

/**
 * Alert component for feedback.
 */
const Alert = (props: Props) => {
    const {
        close_text,
        children,
        close_icon,
        class_name,
        show_icon,
        ...otherProps
    } = props;

    return (
        <AntAlert
            action={children}
            className={class_name}
            closeText={close_text}
            closeIcon={close_icon}
            showIcon={show_icon}
            {...omit(["setProps"], otherProps)}
        />
    );
};

export default Alert;
