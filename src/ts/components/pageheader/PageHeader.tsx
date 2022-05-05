// import React, { ReactNode, useMemo } from "react";
// import {
//     DashComponentProps,
//     StyledComponentProps,
//     BreadcrumbRoute,
// } from "../../types";
// import {
//     parseChildrenToArray,
//     getComponentType,
//     getComponentProps,
// } from "../../utilities";
// import { PageHeader as AntPageHeader, Tag as AntTag } from "antd";
// import { omit } from "ramda";
//
// // TODO handle footer tab bar
// // TODO handle breadcrumbs
// // TODO Add avatar props
//
// type Props = {
//     /**
//      * The children of this component.
//      */
//     children?: ReactNode;
//     /**
//      * Custom back icon, if false the back icon will not be displayed
//      */
//     back_icon?: ReactNode | boolean;
//     /**
//      * Routes for breadcrumbs to be displayed in page header
//      */
//     breadcrumb_routes: BreadcrumbRoute[];
//     /**
//      * Operating area, at the end of the line of the title line
//      */
//     extra?: ReactNode;
//     /**
//      * 	PageHeader's footer, generally used to render TabBar
//      */
//     footer?: ReactNode;
//     /**
//      * PageHeader type, will change background color
//      */
//     ghost?: boolean;
//     /**
//      * Custom subtitle text
//      */
//     subTitle?: ReactNode;
//     /**
//      * Custom title text
//      */
//     title?: ReactNode;
// } & DashComponentProps &
//     StyledComponentProps;
//
// /**
//  * A header with common actions and design elements built in.
//  */
// const PageHeader = (props: Props) => {
//     const { class_name, breadcrumb_routes, children, ...otherProps } = props;
//
//     const tagItems = useMemo(
//         () =>
//             parseChildrenToArray(children)
//                 .filter((c) => getComponentType(c) === "Tag")
//                 .map((c, index) => {
//                     const props = getComponentProps(c);
//                     return (
//                         <AntTag
//                             key={(props.key as string) || `key-${index}`}
//                             closable={props.closable as boolean}
//                             color={props.color as string}
//                         />
//                     );
//                 }),
//         [children]
//     );
//
//     return (
//         <AntPageHeader
//             className={class_name}
//             tags={tagItems}
//             breadcrumb={{ routes: breadcrumb_routes }}
//             {...omit(["setProps"], otherProps)}
//         >
//             {children}
//         </AntPageHeader>
//     );
// };
//
// PageHeader.defaultProps = {};
//
// export default PageHeader;
