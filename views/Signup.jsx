const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require('./Layout')

function Signup(props) {
  return (
    <Layout title="Signup"> 
    <header>
      <a href="/">
        <img className="logo-signup" src='/images/main-logo.png' />
      </a>
    </header>
    
    <h1 className="signup-title">Sign up</h1>
      <form id="form-signup" action="signup" method="POST" encType="multipart/form-data">
        <label>Email: </label>
          <br/>
          <input type='email' name="email" placeholder="Your email goes here" />
          <br/> 

        <label>Password: </label>
          <br/>
          <input type="password" name="password" placeholder="*******" />
          <br />

          <label>Profile picture: </label>
          <br/>
          <input type="file" name="profilepic" id="file-form"/>
          <br />
          
        <button type="submit" className="signup-button" id="create-your-account-button">Create your account</button>

          {
            props.errorMessage
          ? <div className = "error-message">{props.errorMessage}</div>
          : null
          }
          <p className="account-message-signup">
                Do you already have an account? <a href="/auth/login" className="login-link">Log in</a>
          </p>

      </form>

    </Layout>
  )
    
}

module.exports = Signup;