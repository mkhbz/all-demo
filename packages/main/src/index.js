import React from 'react'
import ReactDom from 'react-dom'
import BaseLayout from '@/pages/baseLayout'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
import NoFound404 from '@/pages/other/404'
import { store } from '@/store'
import '@/global.less'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { microApps, config } from '@/micro-app'
import Login from './pages/login';
const App = () => {
    const userInfo = store.getState()
    console.log('用户信息')
    console.log(userInfo)
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/home" push />} />
                    <Route path="/home" component={BaseLayout} />
                    <Route path="/404" component={NoFound404} />
                    <Route path="/login" component={Login} />
                    <Route component={NoFound404} />
                </Switch>


            </Router>
        </Provider>
    )
}
registerMicroApps(microApps, config)
start()
store.subscribe(() => {
    console.log('数值发生了变化');
    console.log(store.getState())
})
ReactDom.render(<App />, document.getElementById("app"))
