import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import validationToken from '../../utils/lib/validationToken';

import './Register.scss';

const Register = ({ registerState, register }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alias, setAlias] = useState('');
    const [secretCode, setSecretCode] = useState('');
    const { loading, error } = registerState;

    const handleChange = (newValue, setValue) => setValue(newValue);
    const handleSubmit = () => register({ username, password, alias, secret_code: secretCode });

    const handleErrorType = (errorType) => {
        switch (errorType) {
            case 'userExists':
                return '이미 존재하는 유저명입니다.';
            case 'wrongRegistrationKey':
                return 'Secret Code가 일치하지 않습니다.';
            default:
                return '회원가입에 실패했습니다, 다시 시도해주세요.';
        }
    };

    useEffect(() => validationToken(), []);

    return (
        <div className="Register">
            <h2>정보보호과 홍보 페이지</h2>
            <p>관리자 회원가입 페이지</p>
            <div className="RegisterForm">
                {loading && <p>잠시만 기다려주세요...</p>}
                {error && <p>{handleErrorType(error)}</p>}
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
                <input
                    type="text"
                    value={alias}
                    placeholder="별칭"
                    onChange={(e) => handleChange(e.target.value, setAlias)}
                />
                <div className="secret">
                    <p>Secret Code</p>
                    <p>
                        회원가입을 하기 위해서는 해당 키가 필요합니다.
                        <br />
                        학과에 문의하세요.
                    </p>
                    <input
                        type="password"
                        value={secretCode}
                        onChange={(e) => handleChange(e.target.value, setSecretCode)}
                    />
                </div>
                <input type="button" value="회원가입" onClick={handleSubmit} />
                <Link to="/login">로그인하러 가기</Link>
            </div>
        </div>
    );
};

export default Register;
