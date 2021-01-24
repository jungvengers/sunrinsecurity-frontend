import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './Header.scss';

import { CommentOutlined, ProjectOutlined, SoundOutlined, PaperClipOutlined } from '@ant-design/icons';

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
                            {/* <Menu.Item key="about:1" icon={<SearchOutlined />}>
                                <Link to="/">학과 소개</Link>
                            </Menu.Item> */}
                            <Menu.Item key="about:2" icon={<ProjectOutlined />}>
                                <Link to="/article">프로젝트 전시장</Link>
                            </Menu.Item>
                            <Menu.Item key="about:3" icon={<CommentOutlined />}>
                                <Link to="/notice">학과 소식</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="2" title="글 작성">
                            <Menu.Item key="write:1" icon={<SoundOutlined />}>
                                <Link to="/admin/form/article">홍보글</Link>
                            </Menu.Item>
                            <Menu.Item key="write:2" icon={<PaperClipOutlined />}>
                                <Link to="/admin/form/notice">게시글</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu key="3" title="글 관리">
                            <Menu.Item key="manage:1" icon={<SoundOutlined />}>
                                <Link to="/admin/article">홍보글</Link>
                            </Menu.Item>
                            <Menu.Item key="manage:2" icon={<PaperClipOutlined />}>
                                <Link to="/admin/notice">게시글</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="4" onClick={handleLogout}>
                            로그아웃
                        </Menu.Item>
                    </>
                ) : (
                    <>
                        <Menu.SubMenu key="1" title="학과">
                            {/* <Menu.Item key="about:1" icon={<SearchOutlined />}>
                                <Link to="/">학과 소개</Link>
                            </Menu.Item> */}
                            <Menu.Item key="about:2" icon={<CommentOutlined />}>
                                <Link to="/notice">학과 소식</Link>
                            </Menu.Item>
                            <Menu.Item key="about:3" icon={<ProjectOutlined />}>
                                <Link to="/article">프로젝트 전시장</Link>
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
