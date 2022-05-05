import React, { ReactNode } from "react";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../types";
import { DatePicker as AntDatePicker } from "antd";

type Props = {
    /**
     * Defines CSS styles which will override styles previously set.
     */
    style?: object;
    /**
     * Often used with CSS to style elements with common properties.
     */
    class_name?: string;
} & DashComponentProps &
    StyledComponentProps;

const DatePicker = () => {
    return <AntDatePicker />;
};
