// import { LOGIN_SUCCESS } from '../../constants/loginTypes';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

// 初始化state数据
const initialState = {
    loginInfo: []
};

/**
 * 登录界面reducer
 * @return
 */
const Login = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS: // 登录成功
            return {...state, loginInfo: action.res}
        default:
            return state;
    }
}

export default Login;
