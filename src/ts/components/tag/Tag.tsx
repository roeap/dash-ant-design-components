import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Tag as AntTag } from "antd";
import Icon from "../icon/Icon";
import { omit } from "ramda";

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Whether the Tag can be closed
     */
    closable?: boolean;
    /**
     * Custom close icon
     */
    close_icon?: string;
    /**
     * Color of the Tag
     */
    color?: string;
    /**
     * Set the icon of tag
     */
    icon?: string;
    /**
     * Whether the Tag is closed or not
     */
    visible?: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * Tag for categorizing or markup.
 */
const Tag = (props: Props) => {
    const { children, class_name, close_icon, icon, ...otherProps } = props;
    return (
        <AntTag
            className={class_name}
            closeIcon={close_icon && Icon({ icon_name: close_icon })}
            icon={icon && Icon({ icon_name: icon })}
            {...omit(["setProps"], otherProps)}
        >
            {children}
        </AntTag>
    );
};

Tag.defaultProps = {};

export default Tag;
