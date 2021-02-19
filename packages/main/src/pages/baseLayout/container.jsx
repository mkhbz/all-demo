import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import RightOne from '@/pages/right/one'
import routes from '@/router'
// 顶部的信息栏
const Container = function (props) {
    console.log(routes, '---------------------')
    return (
        <>
            <Switch>
                {/* <Route component={RightOne} path='/home/right-one' /> */}
                {routes.map(e => (
                    <Route key={e.path} component={e.component} path={e.path} />
                ))}
            </Switch>
            {/* 111111 */}
            {/* <div id='sub'></div> */}
        </>
    )
}
export default Container