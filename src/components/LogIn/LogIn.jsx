import React from "react"
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { authLogin } from "../../redux/redux-store";
import cl from './LogIn.module.scss';

const LogInForm = (props) => {
  return (
    <form className={cl.form} onSubmit={props.handleSubmit}>
      <Field placeholder="Login" name={"login"} component={"input"} type={"text"} className={`${cl.login}`}/>
      <Field name={"password"} component={"input"} type="password" placeholder="Password" className={cl.password} />
      <label htmlFor="rememberMe">
        <Field type="checkbox" component={"input"} name={"rememberMe"} id="rememberMe" className={cl.checkbox} />Remember Me
      </label>
      <button className={cl.btn}>Login</button>
    </form>
  )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LogInForm)

const LogIn = (props) => {
  const onSubmit = (formData) => {
    props.authLogin(formData)
  }

  return (
    <div>
      <h1 className={cl.title}>Вход в аккаунт</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
};

const mapStateToProps = (state) => {
  
}

export default connect(mapStateToProps, {authLogin})(LogIn);