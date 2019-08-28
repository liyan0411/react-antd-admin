/**
 * name:Switch 包装 路由切换动画
 * 参数：type 切换动画类名，目前只支持fade（渐隐渐现）  duration：动画时间 要和 css的渐变时间一致
 * children：子组件
 */

import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import './index.less'

const AnimatedSwitch = props => {
    const { children } = props
    return (
        <Route
            render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames={props.type || 'fade'}
                        timeout={props.duration || 300}
                    >
                        <Switch location={location}>{children}</Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}
        />
    )
}

export default AnimatedSwitch
