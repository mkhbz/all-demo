

import { createStore, applyMiddleware } from 'redux'
import { REDUCER_CONST } from '@/const'
import mainState from '@/reducer'
import thunk from 'redux-thunk';
function logParams({ dispatch, getState }) {
    return next => action => {
        console.log('这个是自己写的中间件')
        // 可以打印要提交的action
        console.log(action)
        // 打印state
        console.log(getState())
        //下一个中间件的调用
        console.log('自己写的中间件结束')
        // 阻止中间件，直接丢一个新的上去

        return next({ type: REDUCER_CONST.ADD_USERI_NFO, payload: { nickName: 'mk-middleware', age: 'middleware', name: 'middleware' } }
        )
        // 需要把他跑出去，给下一个middleware继续解析
        const returnValue = next(action)
        return returnValue
    }
}
// 初始化一个state
const initialState = {
    user: {

        nickName: 'mk', age: 'mk', name: 'mk'
    }
}
// 第三个是中间件
export const store = createStore(mainState, initialState, applyMiddleware(logParams, thunk))