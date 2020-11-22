const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require('./Layout')

function Signup(props) {
  return (
    <Layout title="Signup"> 
    <header>
    <img href="../public/images/main-logo.png" />
    </header>
    
    <h1>Sign up</h1>
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
          <input type="file" name="profilepic"/>
          <br />
          
        <button type="submit" className="signup-button">Create your account</button>

          {
            props.errorMessage
          ? <div className = "error-message">{props.errorMessage}</div>
          : null
          }
          <p className="account-message">
                Do you already have an account? <a href="/auth/login">Log in</a>
          </p>

      </form>

    </Layout>
  )
    
}

module.exports = Signup;