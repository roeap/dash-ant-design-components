import React, { ReactNode } from "react";
import { DashComponentProps, ItemType } from "../../types";
import { Dropdown as AntDropdown, Menu as AntMenu } from "antd";

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
     * Whether the dropdown arrow should be visible
     */
    arrow?: boolean;
    /**
     * Whether the dropdown menu is disabled
     */
    disabled?: boolean;
    /**
     * Placement of popup menu
     */
    placement?:
        | "bottom"
        | "bottomLeft"
        | "bottomRight"
        | "top"
        | "topLeft"
        | "topRight";
    /**
     * The trigger mode which executes the dropdown action.
     * Note that hover can't be used on touchscreens
     */
    trigger?: Array<"click" | "hover" | "contextMenu">;
    /**
     * Whether the dropdown menu is currently visible
     */
    visible?: boolean;
} & DashComponentProps;

/**
 *
 * A Dropdown component
 */
const DropdownMenu = (props: Props) => {
    const { id, children, items, ...otherProps } = props;

    const overlay = <AntMenu items={items} />;

    return (
        <AntDropdown overlay={overlay} {...otherProps}>
            {children}
        </AntDropdown>
    );
};

DropdownMenu.defaultProps = {
    shape: "default",
    size: "middle",
    type: "default",
    n_clicks: 0,
};

export default DropdownMenu;
