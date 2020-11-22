const React = require("react");
const Layout = require('./Layout')



function Profile() {
  return (
    <Layout title="Profile">
<header>
  <img href="../public/images/main-logo.png" />
 </header>
<h1>Profile settings</h1>
<form id="form-setting" action="edit" method="POST" encType="multipart/form-data">

<label>Nicknamee</label>
<input type='Nickname' name="Nickname" placeholder="Edit your Nickname" />

<label>Email </label>
<input type='email' name="email" placeholder="Modify your email" />

<label>Greetings</label>
<input type='text' name="text" placeholder="choose your greeting" />

<label>Image</label>
<input type="file" name="profilepic"/>

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