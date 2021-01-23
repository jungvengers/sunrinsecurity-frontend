import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import ManageContainer from './containers/ManageContainer';
import EditArticleContainer from './containers/EditArticleContainer';
import UploadArticleContainer from './containers/UploadArticleContainer';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

import history from './utils/lib/history';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/register" component={RegisterContainer} />
                <Route path="/admin/form" component={UploadArticleContainer} />
                <Route exact path="/admin/edit" component={ManageContainer} />
                <Route path="/admin/edit/:id" component={EditArticleContainer} />
            </Switch>
        </Router>
    );
};

export default App;
