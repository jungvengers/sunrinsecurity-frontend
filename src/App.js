import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import FormContainer from './containers/FormContainer';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

import './App.css';
import 'antd/dist/antd.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/register" component={RegisterContainer} />
                <Route path="/admin/form" component={FormContainer} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
