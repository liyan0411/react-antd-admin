import React, { Fragment } from 'react';
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import NotFound from "@/components/error/NotFound";
import Login from "@/pages/login";
import App from './App';

export default ()=>{
	return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  )
}