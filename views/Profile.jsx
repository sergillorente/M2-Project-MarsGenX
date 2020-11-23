const React = require("react");
const Layout = require('./Layout')



function Profile(props) {
  return (
    <Layout title="Profile">
      <header>
        <img href="../public/images/main-logo.png" />
      </header>
      
      <h1>Profile settings</h1>
      <form id="form-setting" action="edit" method="POST" encType="multipart/form-data">

      <label>Nickname:</label>
      <br/>
      <input type='Nickname' name="Nickname" placeholder="Edit your Nickname" />
      <br/>

      <label>Email:</label>
      <br/>
      <input type='email' name="email" placeholder="Modify your email" />
      <br/>

      <label>Greetings:</label>
      <br/>
      <input type='text' name="text" placeholder="Choose your greeting" />
      <br/>

      <label>Profile picture:</label>
      <br/>
      <input type="file" name="profilepic"/>
      <br/>

      <button type="submit" className="signup-button">Edit your account</button>


      {
        props.errorMessage
        ? <div className = "error-message">{props.errorMessage}</div>
        : null
      }

      </form>

    </Layout>
  )
    
}

module.exports = Profile;