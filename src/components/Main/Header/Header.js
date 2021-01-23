import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './Header.scss';

import {
    SearchOutlined,
    CommentOutlined,
    ProjectOutlined,
    SoundOutlined,
    PaperClipOutlined,
} from '@ant-design/icons';

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.reload();
    };
    return (
        <Layout.Header className="Header">
            <h2 style={{ float: 'left' }}>선린인터넷고등학교 정보보호과</h2>
            <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
                {localStorage.getItem('accessToken') ? (
                    <>
                        <Menu.SubMenu key="1" title="학과">
                            <Menu.Item key="1" icon={<SearchOutlined />}>
                                <Link to="/">학과 소개</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<CommentOutlined />}>
                                <Link to="/">학과 소식</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ProjectOutlined />}>
                                <Link to="/">프로젝트 전시장</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="2" title="글 작성">
                            <Menu.Item key="1" icon={<SoundOutlined />}>
                                <Link to="/admin/form">홍보글</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<PaperClipOutlined />}>
                                <Link to="/admin/form">게시글</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="3" title="글 관리">
                            <Menu.Item key="1" icon={<SoundOutlined />}>
                                <Link to="/admin/edit">홍보글</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<PaperClipOutlined />}>
                                <Link to="/admin/edit">게시글</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="4" onClick={handleLogout}>
                            로그아웃
                        </Menu.Item>
                    </>
                ) : (
                    <>
                        <Menu.SubMenu key="1" title="학과">
                            <Menu.Item key="1" icon={<SearchOutlined />}>
                                <Link to="/">학과 소개</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<CommentOutlined />}>
                                <Link to="/">학과 소식</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ProjectOutlined />}>
                                <Link to="/">프로젝트 전시장</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="2">
                            <Link to="/login">관리자 로그인</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/register">관리자 회원가입</Link>
                        </Menu.Item>
                    </>
                )}
            </Menu>
        </Layout.Header>
    );
};

export default Header;
