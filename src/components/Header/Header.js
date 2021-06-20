import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './Header.scss';

import { SettingOutlined, ProjectOutlined, NotificationOutlined } from '@ant-design/icons';

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.pathname = '/';
    };
    return (
        <Layout.Header className="Header">
            <h2 style={{ float: 'left' }}><Link to="/" style={{ color: 'white' }}>선린인터넷고등학교 정보보호과</Link></h2>
            <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
                {localStorage.getItem('accessToken') ? (
                    <>
                        <Menu.SubMenu key="1" title="메뉴">
                            <Menu.Item key="about:3" icon={<ProjectOutlined />}>
                                <Link to="/article">프로젝트 전시장</Link>
                            </Menu.Item>
                            <Menu.Item key="about:2" icon={<NotificationOutlined />}>
                                <Link to="/notice">학과 소식</Link>
                            </Menu.Item>
                            <Menu.Item key="about:3" icon={<SettingOutlined />}>
                                <Link to="/notice">개발자 소개</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="2">
                           <Link to="/admin">관리자 페이지</Link>
                        </Menu.Item>
                        <Menu.Item key="3" onClick={handleLogout}>
                            로그아웃
                        </Menu.Item>
                    </>
                ) : (
                    <>
                        <Menu.SubMenu key="1" title="메뉴">
                            <Menu.Item key="about:3" icon={<ProjectOutlined />}>
                                <Link to="/article">프로젝트 전시장</Link>
                            </Menu.Item>
                            <Menu.Item key="about:2" icon={<NotificationOutlined />}>
                                <Link to="/notice">학과 소식</Link>
                            </Menu.Item>
                            <Menu.Item key="about:3" icon={<SettingOutlined />}>
                                <Link to="/notice">개발자 소개</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="2">
                            <Link to="/login">관리자 로그인</Link>
                        </Menu.Item>
                    </>
                )}
            </Menu>
        </Layout.Header>
    );
};

export default Header;
