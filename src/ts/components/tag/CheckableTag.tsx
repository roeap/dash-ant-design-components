import React, { ReactNode } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Tag } from "antd";
import { CheckableTagProps } from "antd/lib/tag";

const { CheckableTag: AntCheckableTag } = Tag;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Checked status of Tag
     */
    checked: boolean;
} & DashComponentProps &
    StyledComponentProps;

/**
 * CheckableTag works like a Checkbox, click it to toggle checked state.
 */
const CheckableTag = (props: Props) => {
    const { children, class_name, checked, setProps, ...otherProps } = props;

    const onClick: CheckableTagProps["onClick"] = () =>
        setProps({ checked: !checked });

    return (
        <AntCheckableTag
            className={class_name}
            checked={checked}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </AntCheckableTag>
    );
};

CheckableTag.defaultProps = {
    checked: false,
};

export default CheckableTag;
