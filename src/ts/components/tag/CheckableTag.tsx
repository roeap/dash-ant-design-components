import React, { useCallback, ReactNode } from "react";
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
 * CheckableTag works like Checkbox, click it to toggle checked state.
 */
const CheckableTag = (props: Props) => {
    const { children, class_name, setProps, ...otherProps } = props;

    const handleClick: CheckableTagProps["onClick"] = useCallback(
        (checked) => setProps({ checked }),
        [setProps]
    );

    return (
        <AntCheckableTag
            className={class_name}
            onClick={handleClick}
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
