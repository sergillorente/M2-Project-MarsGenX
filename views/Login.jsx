const React = require("react");
const Layout = require("./Layout");

function Login(props) {
  return (
    <Layout title="Login">
      <header>
        <img src="../public/images/main-logo" />
      </header>

      <h1>Login</h1>
      <br/>
      <form id="form-login" action="auth/login" method="POST">
        <label>Email: </label>
        <br />
        <input type="email" name="email" placeholder="Your email goes here" />
        <br />

        <label>Password: </label>
        <br />
        <input type="password" name="password" placeholder="*******" />
        <br />

        <button type="submit" className="login-button">
          Welcome back!
        </button>

        {props.errorMessage ? (
          <div className="error-message">{props.errorMessage}</div>
        ) : null}
        <p className="account-message">
          Don't you have an account yet? <a href="/auth/signup">Sign up</a>
        </p>
      </form>
    </Layout>
  );
}

module.exports = Login;
