import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Input, Icon, Spin, Checkbox } from 'antd'
import './style/login.less'

const FormItem = Form.Item;

class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordDirty: false,
      loginBtnLoading: false,
      loginBtnText: '登录'
    }
  }

  componentDidMount() {}

  handleSubmit = (e) => {
    e.preventDefault()
    // const { actions, form } = this.props;
    const { form } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let username = values.username,
            password = values.password,
            loginParams = {
              username, password
            }
        this.setState({loginBtnLoading: true, loginBtnText: '登录中...'})
      }
    })
  }

  checkUsernaname = (rule, value, callback) => {
    const form = this.props.form
    if (!err) {
      callback()
    } else if (!/^\s+\d/.test(value)){
      callback()
    }else {
      callback()
    }
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
    	form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { loading } = this.props;
    const { getFieldDecorator } = this.props.form
    console.log(loading)
    return (
      <div className="login-container">
        <div className="login-form">
          <Spin tip="载入中..." spinning={loading}>
            <div className="login-logo">
				        <img src='' />
				        <span>Ant Design</span>
				    </div>
            <Form onSubmit={this.handleSubmit}>
				        <FormItem hasFeedback>
				          {getFieldDecorator('username', {
										initialValue: 'sosout',
				            rules: [{
											required: true,
											message: '用户名不能为空'
										}, {
				              validator: this.checkUsername
				            }],
				          })(
				            <Input size="large" placeholder="用户名" maxLength="6" />
				          )}
				        </FormItem>
				        <FormItem hasFeedback>
				          {getFieldDecorator('password', {
				            rules: [{
				              required: true,
											message: '密码不能为空',
				            }, {
				              validator: this.checkPassword
				            }],
				          })(
				            <Input size="large" type="password" placeholder="密码" maxLength="6" />
				          )}
				        </FormItem>
				        <FormItem>
				          <Button type="primary" htmlType="submit" size="large" loading={this.state.loginBtnLoading}>{this.state.loginBtnText}</Button>
				        </FormItem>
				        <div className="login-account">
				          <span>账号：sosout</span>
				          <span>密码：sosout</span>
				        </div>
			        </Form>
          </Spin>
        </div>
      </div>
    )
  }
}


LoginContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

const LoginForm = Form.create()(LoginContainer);

// 将 store 中的数据作为 props 绑定到 LoginForm 上
const mapStateToProps = (state, ownProps) => {
    // let { Common, Login } = state;
    // return {
    //     loading: Common.loading,
    //     loginInfo: Login.loginInfo
    // }
}

// 将 action 作为 props 绑定到 Product 上。
const mapDispatchToProps = (dispatch, ownProps) => ({
    // actions: bindActionCreators({ goLogin }, dispatch)
});

const Main = connect(mapStateToProps, mapDispatchToProps)(LoginForm); // 连接redux


export default Main
