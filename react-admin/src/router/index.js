/**
 * 菜单栏 路由配置文件
 */
import React,{Component} from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import AllPages from '../pages';
import routesConfig from './config';

// 根据状态 写路由拦截逻辑
class CRouter extends Component {
	render(){
		return (
      <Switch>
        {
          Object.keys(routesConfig).map(key => 
            routesConfig[key].map(r => {
              const route = r => {
                const Component = AllPages[r.component];
                return (
                  <Route
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    component={Component}
                  />
                )
              }
              return r.component ? route(r) : r.subs.map(r => route(r))
            })
          )
        }
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    )
	}
}
export default CRouter;