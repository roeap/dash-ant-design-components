import React from "react";
import * as icons from "@ant-design/icons";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { omit } from "ramda";

type Props = {
    /**
     * Name for the icon https://ant.design/components/icon/
     */
    icon_name: string;
} & StyledComponentProps &
    DashComponentProps;
/**
 * Icon
 */
const Icon = (props: Props) => {
    const { class_name, icon_name, ...otherProps } = props;
    const SelectedIcon = icons[icon_name];
    return (
        <SelectedIcon
            className={class_name}
            {...omit(["setProps"], otherProps)}
        />
    );
};

Icon.defaultProps = {};

export default Icon;
