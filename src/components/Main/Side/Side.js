import React from 'react';
import { Layout, Menu } from 'antd';

import './Side.scss';
import { TeamOutlined, AppstoreOutlined, StarOutlined } from '@ant-design/icons';

const Side = ({ handleToggleCategory, handleAddClub, handleDeleteClub, handleAddkind, handleDeleteKind }) => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;

    return (
        <div className="Side">
            <Sider width={200} className="site-layout-background">
                <Menu mode="inline" onSelect={handleToggleCategory}>
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="실적 종류">
                        <Menu.Item key="true">교외 실적</Menu.Item>
                        <Menu.Item key="false">교내 실적</Menu.Item>
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
            <div className="footer">
                정보보호과 @ 2021 Created by <br />
                19학번 김연규
                <br /> 19학번 조강연
                <br /> 19학번 양원준
            </div>
        </div>
    );
};

export default Side;
