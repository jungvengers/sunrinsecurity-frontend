import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './Header.scss';

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.reload();
    };
    return (
        <Layout.Header className="Header">
            <h2 style={{ float: 'left' }}>선린인터넷고등학교 정보보호과</h2>
            {localStorage.getItem('accessToken') ? (
                <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
                    <Menu.Item key="1">
                        <Link to="/admin/form">글 작성</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin/form">글 수정</Link>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={handleLogout}>
                        로그아웃
                    </Menu.Item>
                </Menu>
            ) : (
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="3">
                        <Link to="/login">관리자 로그인</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/register">관리자 회원가입</Link>
                    </Menu.Item>
                </Menu>
            )}
        </Layout.Header>
    );
};

export default Header;
