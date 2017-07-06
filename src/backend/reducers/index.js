// import { fromJS } from 'immutable';
// import { LOADING } from '../constants/dispatchTypes';
const LOADING = 'LOADING'

import { combineReducers } from 'redux'

import Login from './login'; // 登录界面

// 初始化state数据
const initialState = {
    loading: false
};

/**
 * 公共reducer
 * @return
 */
const Common = (state = initialState, action) => {
    switch(action.type) {
        case LOADING: // 用于页面和区块的加载中状态
            return {...state, loading: action.loading}
        default:
            return state;
    }
}

// 导出合并所有的reducers
export default combineReducers({
  Common,
  Login
})
