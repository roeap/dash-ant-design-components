import React, { ReactNode } from "react";
import {
    DashComponentProps,
    ItemType,
    DashLoadingState,
    StyledComponentProps,
} from "../../types";
import { Dropdown as AntDropdown, Menu as AntMenu } from "antd";

const { Button: AntDropdownButton } = AntDropdown;

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Items displayed in the dropdown menu
     */
    items: ItemType[];
    /**
     * Disables all checkboxes within the group
     */
    disabled?: boolean;
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state?: DashLoadingState;
    /**
     * An integer that represents the number of times
     * that this element has been clicked on.
     */
    n_clicks: number;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A button with an integrated dropdown menu
 */
const DropdownButton = (props: Props) => {
    const {
        id,
        children,
        items,
        class_name,
        loading_state,
        disabled,
        setProps,
        n_clicks,
        ...otherProps
    } = props;

    const overlay = <AntMenu items={items} />;

    const handleClick = () => {
        if (!disabled && setProps) {
            setProps({
                n_clicks: n_clicks + 1,
            });
        }
    };

    return (
        <AntDropdownButton
            overlay={overlay}
            disabled={disabled}
            onClick={handleClick}
            loading={loading_state && loading_state.is_loading}
            {...otherProps}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {children}
        </AntDropdownButton>
    );
};

DropdownButton.defaultProps = {
    n_clicks: 0,
};

export default DropdownButton;
