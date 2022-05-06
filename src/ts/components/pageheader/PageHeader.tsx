import React, { ReactNode, useMemo } from "react";
import {
    DashComponentProps,
    StyledComponentProps,
    BreadcrumbRoute,
} from "../../types";
import { parseChildrenToArray, getComponentType } from "../../utilities";
import { PageHeader as AntPageHeader } from "antd";
import { omit } from "ramda";

// TODO handle footer tab bar
// TODO handle breadcrumbs
// TODO Add avatar props

const FILTERED_COMPONENTS = ["Tag", "PageHeaderOperation"];

type Props = {
    /**
     * The children of this component.
     */
    children?: ReactNode;
    /**
     * Custom back icon, if false the back icon will not be displayed
     */
    back_icon?: ReactNode | boolean;
    /**
     * Routes for breadcrumbs to be displayed in page header
     */
    breadcrumb_routes?: BreadcrumbRoute[];
    /**
     * Operating area, at the end of the line of the title line
     */
    extra?: ReactNode;
    /**
     * 	PageHeader's footer, generally used to render TabBar
     */
    footer?: ReactNode;
    /**
     * PageHeader type, will change background color
     */
    ghost?: boolean;
    /**
     * Custom subtitle text
     */
    sub_title?: ReactNode;
    /**
     * Custom title text
     */
    title?: ReactNode;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A header with common actions and design elements built in.
 */
const PageHeader = (props: Props) => {
    const {
        children,
        class_name,
        breadcrumb_routes,
        sub_title,
        ...otherProps
    } = props;

    const tagItems = useMemo(
        () =>
            parseChildrenToArray(children).filter(
                (c) => getComponentType(c) === "Tag"
            ),
        [children]
    );

    const operations = useMemo(
        () =>
            parseChildrenToArray(children).filter(
                (c) => getComponentType(c) === "PageHeaderOperation"
            ),
        [children]
    );

    const filteredChildren = useMemo(
        () =>
            parseChildrenToArray(children).filter(
                (c) => !FILTERED_COMPONENTS.includes(getComponentType(c))
            ),
        [children]
    );

    return (
        <AntPageHeader
            className={class_name}
            subTitle={sub_title}
            // @ts-expect-error we are sure those are in fact Tags
            tags={tagItems}
            extra={operations}
            breadcrumb={
                breadcrumb_routes ? { routes: breadcrumb_routes } : undefined
            }
            {...omit(["setProps"], otherProps)}
        >
            {filteredChildren}
        </AntPageHeader>
    );
};

PageHeader.defaultProps = {};

export default PageHeader;
