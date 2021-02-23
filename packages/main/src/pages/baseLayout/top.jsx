import React from 'react'
import { connect } from 'react-redux'
import { REDUCER_CONST } from '@/const'
// 顶部的信息栏
const Top = function (props) {
  const { user, dispatch } = props
  console.log('用户信息')
  const handleLogout = () => {
    dispatch({ type: REDUCER_CONST.RESET_USER_INFO })
  }
  const handleLogin = () => {
    history.pushState(null, '', path) // 没引入路由，所以不能用路由切换
    dispatch({ type: REDUCER_CONST.ADD_USERI_NFO, payload: { nickName: 'mk', age: 'mk', name: 'mk' } })
  }
  const changeAjax = () => {
    console.log('请求了ajax')
    // console.log('不使用thunk的情况下设置')
    console.log('thunk设置下用户的信息')
    console.log('设置完毕')
    return (dispatch) => {
      console.log(dispatch)
      dispatch({ type: REDUCER_CONST.ADD_USERI_NFO, payload: { nickName: 'mk', age: 'mk', name: 'mk' } })
    }
  }
  console.log(user)
  return (
    <>
      <div className="logo" />
      {user.nickName ? (
        <div onClick={handleLogout} className="nickName">
          {user?.nickName}
        </div>
      ) : (
        <div onClick={handleLogin} className="nickName">
          点击登录
        </div>
      )}
      <div
        className="nickName"
        onClick={() => {
          dispatch(changeAjax())
        }}
      >
        ajax的请求
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
export default connect(mapStateToProps)(Top)
