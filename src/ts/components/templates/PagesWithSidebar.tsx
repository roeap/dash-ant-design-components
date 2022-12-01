import React, { ReactNode, useMemo, useState, useCallback } from "react";
import { Layout, Menu, Divider, MenuProps } from "antd";
import {
    DashComponentProps,
    DashLoadingState,
    StyledComponentProps,
} from "../../types";
import {
    parseChildrenToArray,
    getComponentType,
    getComponentProps,
} from "../../utilities";

const { Sider, Content } = Layout;

type Context = {
    selectedKey: string;
    cbControls: (node: ReactNode) => void;
};

export const PagesContext = React.createContext<Context>({
    selectedKey: "",
    cbControls: undefined,
});

const default_sidebar_style = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    borderInlineEnd: "1px solid rgba(253, 253, 253, 0.12)",
    overflowX: "hidden",
};
const default_content_style = { margin: 0, padding: 0, minHeight: "100vh" };

type Props = {
    /**
     * Children should exclusively be Page components
     */
    children?: ReactNode;
    /**
     * Currently active page key
     */
    selected_key?: string;
    content_style?: React.CSSProperties;
    sidebar_style?: React.CSSProperties;
    sidebar_width?: string | number;
    menu_theme: "dark" | "light";
    /**
     * Object that holds the loading state object coming from dash-render+er
     */
    loading_state?: DashLoadingState;
} & DashComponentProps &
    StyledComponentProps;

/**
 * A templated layout for a sidebar with multiple pages
 */
const PagesWithSidebar = (props: Props) => {
    const {
        children,
        selected_key,
        sidebar_width,
        menu_theme,
        sidebar_style,
        content_style,
        setProps,
    } = props;
    const [controls, setControls] = useState<ReactNode>(undefined);

    const handleSelect: MenuProps["onSelect"] = useCallback(
        ({ key: selected_key }) => {
            setProps({ selected_key });
        },
        [setProps]
    );

    const options = useMemo(
        () =>
            parseChildrenToArray(children)
                .filter((c) => getComponentType(c) === "Page")
                .map((c) => {
                    const componentProps = getComponentProps(c);
                    return {
                        label: componentProps.page_key as string,
                        key: componentProps.page_key as string,
                    };
                }),
        [children]
    );

    const eff_sidebar_style = useMemo(
        () => ({ ...default_sidebar_style, ...sidebar_style }),
        [sidebar_style]
    );

    const eff_content_style = useMemo(
        () => ({
            ...default_content_style,
            ...content_style,
        }),
        [content_style]
    );

    return (
        <PagesContext.Provider
            value={{ selectedKey: selected_key, cbControls: setControls }}
        >
            <Layout hasSider={true}>
                {/* @ts-expect-error sure */}
                <Sider style={eff_sidebar_style} width={sidebar_width || 200}>
                    {options.length > 1 && (
                        <Menu
                            onSelect={handleSelect}
                            theme={menu_theme}
                            mode="inline"
                            selectedKeys={[selected_key]}
                            defaultSelectedKeys={[options[0].key]}
                            items={options}
                        />
                    )}
                    {options.length > 1 && <Divider />}
                    {controls}
                </Sider>
                <Layout
                    style={{
                        marginLeft: sidebar_width || 200,
                        minHeight: "100vh",
                    }}
                >
                    <Content style={eff_content_style}>{children}</Content>
                </Layout>
            </Layout>
        </PagesContext.Provider>
    );
};

PagesWithSidebar.defaultProps = { menu_theme: "dark" };

export default PagesWithSidebar;
