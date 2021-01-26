import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import validationToken from '../../utils/lib/validationToken';

import './Login.scss';

const Login = ({ loginState, login }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { loading, error } = loginState;

    const handleChange = (newValue, setValue) => setValue(newValue);
    const handleSubmit = () => login({ username, password });

    useEffect(() => validationToken(), []);

    if (localStorage.getItem('accessToken')) history.push('/');
    return (
        <div className="Login">
            <h2>정보보호과 홍보 페이지</h2>
            <p>관리자 로그인 페이지</p>
            <div className="LoginForm">
                {loading && <p>잠시만 기다려주세요...</p>}
                {error && <p>로그인에 실패하였습니다.</p>}
                <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => handleChange(e.target.value, setUsername)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => handleChange(e.target.value, setPassword)}
                />
                <input type="button" value="로그인" onClick={handleSubmit} />
                <Link to="/register">관리자 계정 만들러 가기</Link>
                <Link to="/">홈으로 가기</Link>
            </div>
        </div>
    );
};

export default Login;
