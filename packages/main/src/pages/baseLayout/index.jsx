import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { withRouter } from 'react-router-dom'
import React, { useState } from 'react';
import Top from './top'
import Container from './container'
import { connect } from 'react-redux';
import { microApps } from '@/micro-app'
import routes from '@/router'

const BaseLayout = (props) => {
    console.log(microApps)
    // 暂时从localstorage中读取，如果还没有登录，则跳转到登录
    console.log('BaseLayout的props')
    console.log(props)
    // qiankun的路由跳转
    const qiankunToRouter = (path) => {
        // console.log(path)
        props.history.push(path)
        // history.pushState(null, path, path) // 没引入路由，所以不能用路由切换
    }
    // 系统内部的路由跳转
    const systemToRouter = (path) => {
        console.log(props)
        props.history.push(path)
    }
    return (
        <Layout className='baseLayout'>
            <Header className="header">
                <Top />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="qiankun" icon={<UserOutlined />} title="qiankun">
                            {
                                microApps.map(e =>
                                    <Menu.Item onClick={() => { qiankunToRouter(e.path) }} key={'qiankun' + e}>{e.name}</Menu.Item>
                                )
                            }

                        </SubMenu>
                        <SubMenu key="system" icon={<UserOutlined />} title="system">
                            {
                                routes.map(e =>
                                    <Menu.Item onClick={() => { systemToRouter(e.path) }} key={'system' + e}>{e.name}</Menu.Item>
                                )
                            }

                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Container />
                </Layout>
            </Layout>
        </Layout>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default withRouter(connect(mapStateToProps)(BaseLayout))