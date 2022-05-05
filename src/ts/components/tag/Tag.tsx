import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Tag as AntTag } from "antd";
import { omit } from "ramda";

type Props = {
    /**
     * Whether the Tag can be closed
     */
    closable?: boolean;
    /**
     * Custom close icon
     */
    close_icon?: ReactNode;
    /**
     * Color of the Tag
     */
    color?: string;
    /**
     * Set the icon of tag
     */
    icon?: ReactNode;
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
    const { class_name, close_icon, ...otherProps } = props;
    return (
        <AntTag
            className={class_name}
            closeIcon={close_icon}
            {...omit(["setProps"], otherProps)}
        />
    );
};

Tag.defaultProps = {};

export default Tag;
