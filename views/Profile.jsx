const React = require("react");
const Layout = require('./Layout');



function Profile(props) {
  return (
    <Layout title="Profile">
      <header>
        <img href="../public/images/main-logo.png" />
        <div>
        {props.member.image}
        {props.member.points}
        {props.member.status}
        </div>
        <a href ="/auth/logout">
          <button>Log out</button>
        </a>
      </header>
      
      <h1>Profile settings</h1>
      <form id="form-setting" action="edit" method="POST" encType="multipart/form-data">

      <label>Username:</label>
      <br/>
      <input type="text" name="username" placeholder="Type in here" />
      <br/>

      <label>Nickname:</label>
      <br/>
      <input type='text' name="nickname" placeholder="Edit your Nickname" />
      <br/>

      <label>Greetings:</label>
      <br/>
      <input type='text' name="greeting" placeholder="Choose your greeting" />
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