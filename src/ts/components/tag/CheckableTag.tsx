import React, { useCallback } from "react";
import { DashComponentProps, StyledComponentProps } from "../../types";
import { Tag } from "antd";
import { CheckableTagProps } from "antd/lib/tag";

const { CheckableTag: AntCheckableTag } = Tag;

type Props = {
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
    const { class_name, setProps, ...otherProps } = props;

    const handleChange: CheckableTagProps["onChange"] = useCallback(
        (checked) => setProps({ checked }),
        [setProps]
    );

    return (
        <AntCheckableTag
            className={class_name}
            onChange={handleChange}
            {...otherProps}
        />
    );
};

CheckableTag.defaultProps = {
    checked: false,
};

export default CheckableTag;
