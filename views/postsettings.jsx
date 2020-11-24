const React = require("react");
const Layout = require('./Layout');



function Profile(props) {
  return (
    <Layout title="Profile">
      <header>
        <img href="../public/images/main-logo.png" />
        <div>
        { /*{props.member.image}
        {props.member.points}
        {props.member.status}  */}
        </div>
      </header>
      
      <h1>Post settings</h1>
      <form id="form-setting" action={`/posts/update/${props._id}`} method="POST" encType="multipart/form-data">

      <label>Title:</label>
      <br/>
      <input type="text" name="username" placeholder="New title here" />
      <br/>

      <label>Text:</label>
      <br/>
      <input type='text' name="nickname" placeholder="Edit your post" />
      <br/>

      <label>Profile picture:</label>
      <br/>
      <input type="file" name="profilepic"/>
      <br/>

      <button type="submit" className="signup-button">Edit your Post</button>


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