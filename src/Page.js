import React, { Fragment } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import store from './store';
import NotFound from "_c/error/NotFound";
import Login from "@/pages/login";
import App from './App.jsx';

export default ()=>{
	return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {/* <Switch>是唯一的因为它仅仅只会渲染一个路径 */}
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/root" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}
