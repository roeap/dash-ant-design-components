import React, { useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button } from "../src/ts";

const { Header, Content, Footer, Sider } = Layout;

const StateWrapper = ({ tag: Tag, ...otherProps }) => {
    // helper to mimic setProps functionality
    const [state, setState] = useState(otherProps);
    return (
        <Tag
            setProps={(props) => setState({ ...state, ...props })}
            {...state}
        />
    );
};

const items: MenuProps["items"] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));

const Demo = () => (
    <Layout hasSider>
        <Sider
            theme="light"
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className="logo" />
            <Menu
                // theme="dark"
                mode="inline"
                defaultSelectedKeys={["4"]}
                items={items}
            />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
            <Header style={{ padding: 0 }} />
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                <Button id="button-primary" type="primary">Primary</Button>
                <Button id="button-dashed" type="dashed">Dashed</Button>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Dash Ant Design Components
            </Footer>
        </Layout>
    </Layout>
);

export default Demo;
