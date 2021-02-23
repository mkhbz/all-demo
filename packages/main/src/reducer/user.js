import { REDUCER_CONST } from '@/const';

export default (state = [], action) => {
  switch (action.type) {
    // 添加用户信息
    case REDUCER_CONST.ADD_USERI_NFO:
      const { payload } = action;
      return { ...state, ...payload };
    // 重置用户信息
    case REDUCER_CONST.RESET_USER_INFO:
      return {};
    default:
      return state;
  }
};
