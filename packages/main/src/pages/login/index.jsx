import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd';
// 顶部的信息栏
const Login = function (props) {
    console.log('开始渲染用户信息')
    return <div>登录信息</div>
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login)