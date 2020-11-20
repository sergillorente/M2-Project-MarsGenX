const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require('./Layout')

function Signup(props) {
  return (
    <Layout> {/*props.title */} 
      <form id="form-signup" action="auth/signup" method="POST">
        <label>Email: </label>
          <br/>
          <input type='email' name="email" placeholder="Your email here" />
          <br/> 

        <label>Password: </label>
          <br/>
          <input type="password" name="password" placeholder="*******" />
          <br />

        <button type="submit" className="signup-button">Create your account</button>

          {
            props.errorMessage
          ? <div className = "error-message">{props.errorMessage}</div>
          : null
          }

      </form>

    </Layout>
  )
    
}

module.exports = Signup;