import React from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined, AppstoreOutlined, StarOutlined } from '@ant-design/icons';

const Sider = ({
    handleToggleCategory,
    handleAddClub,
    handleDeleteClub,
    handleAddkind,
    handleDeleteKind,
}) => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;

    return (
        <Sider width={200} className="site-layout-background">
            <Menu mode="inline" onSelect={handleToggleCategory}>
                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="정보보호과">
                    <Menu.Item key="true">학과 소개</Menu.Item>
                    <Menu.Item key="false">학과 소식</Menu.Item>
                </SubMenu>
            </Menu>
            <Menu mode="inline" onSelect={handleAddClub} onDeselect={handleDeleteClub} multiple>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="동아리">
                    <Menu.Item key="Layer7">Layer7</Menu.Item>
                    <Menu.Item key="Unifox">Unifox</Menu.Item>
                    <Menu.Item key="TeamLog">TeamLog</Menu.Item>
                    <Menu.Item key="Nefus">Nefus</Menu.Item>
                    <Menu.Item key="Emotion">Emotion</Menu.Item>
                </SubMenu>
            </Menu>
            <Menu
                style={{ height: '100%' }}
                mode="inline"
                onSelect={handleAddkind}
                onDeselect={handleDeleteKind}
                multiple>
                <SubMenu key="sub3" icon={<StarOutlined />} title="분야">
                    <Menu.Item key="iot">IOT</Menu.Item>
                    <Menu.Item key="web">WEB</Menu.Item>
                    <Menu.Item key="app">APP</Menu.Item>
                    <Menu.Item key="security">SECURITY</Menu.Item>
                    <Menu.Item key="ai">AI</Menu.Item>
                    <Menu.Item key="algorithm">ALGORITHM</Menu.Item>
                    <Menu.Item key="network">NETWORK</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default Sider;
