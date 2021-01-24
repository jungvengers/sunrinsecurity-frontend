import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import ManageArticleContainer from './containers/ManageArticleContainer';
import ManageNoticeContainer from './containers/ManageNoticeContainer';
import EditArticleContainer from './containers/EditArticleContainer';
import EditNoticeContainer from './containers/EditNoticeContainer';
import UploadNoticeContainer from './containers/UploadNoticeContainer';
import UploadArticleContainer from './containers/UploadArticleContainer';
import ArticleContainer from './containers/ArticleContainer';
import NoticeContainer from './containers/NoticeContainer';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

import history from './utils/lib/history';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/article" component={ArticleContainer} />
                <Route exact path="/notice" component={NoticeContainer} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/register" component={RegisterContainer} />
                <Route exact path="/admin/article" component={ManageArticleContainer} />
                <Route exact path="/admin/notice" component={ManageNoticeContainer} />
                <Route exact path="/admin/form/article" component={UploadArticleContainer} />
                <Route exact path="/admin/form/notice" component={UploadNoticeContainer} />
                <Route exact path="/admin/edit/article/:id" component={EditArticleContainer} />
                <Route exact path="/admin/edit/notice/:id" component={EditNoticeContainer} />
            </Switch>
        </Router>
    );
};

export default App;
