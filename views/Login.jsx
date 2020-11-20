const React = require("react");
const Layout = require('./Layout')

function Login() {
  return (
    <Layout>
      <form id="form-login" action="auth/login" method="POST">
        <label>Email: </label>
          <br/>
          <input type='email' name="email" placeholder="Your email here" />
          <br/> 

        <label>Password: </label>
          <br/>
          <input type="password" name="password" placeholder="*******" />
          <br />

        <button type="submit" className="login-button">Welcome back!</button>

          {
            props.errorMessage
          ? <div className = "error-message">{props.errorMessage}</div>
          : null
          }

      </form>
    </Layout>
  )
    
}

module.exports = Login;