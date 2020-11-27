const React = require("react");
const Layout = require('./Layout');



function Profile(props) {
  return (
    <Layout title="Profile">
      <header className="header">
        <img className="logoImage" src='/images/main-logo.png' />
        <div className="margin-profile-p">
          <img className="profileImage" src={props.member.image} />
          <p>Points: {props.member.points}</p>
          <p>Status: {props.member.status}</p>
        </div>
      </header>

      <main className= "textColor">
      <h1>Profile settings</h1>
      <form id="form-setting" action="/private/editprofile" method="POST" encType="multipart/form-data">

        <label>Username:</label>
        <br />
        <input type="text" name="username" defaultValue={props.member.username} placeholder="Type in here" />
        <br />

        <label>Greetings:</label>
        <br />
        <input type='text' name="greetings" defaultValue={props.member.greetings} placeholder="Choose your greeting" />
        <br />

        <label>Profile picture:</label>
        <br />
        <img src={props.member.image} />
        <br />
        <input type="file" name="profilepic" />
        <br />

        <button type="submit" className="signup-button">Edit your account</button>


        {
          props.errorMessage
            ? <div className="error-message">{props.errorMessage}</div>
            : null
        }

      </form>

      <a href="/auth/logout">
        <button>Log out</button>
      </a>

      <footer>
        <ul className="private-ul">
          <li>
            <a href="/private/posts/add">
              <img src="/images/new.png" alt="New post icon" />
            </a>
            <br />
            <label>New Post</label>
          </li>
          <li>
            <a href="/private/donation">
              <img src="/images/donation.png" alt="Donation icon" />
            </a>
            <br />
            <label>Donate</label>
          </li>
          <li>
            <a href="/private/member">
              <img src="/images/membership.png" alt="Profile icon" />
            </a>
            <br />
            <label>Member</label>
          </li>
          <li>
            <a href="/private/edit-profile">
              <img src="/images/profile-user.png" alt="Profile icon" />
            </a>
            <br />
            <label>Profile</label>
          </li>
        </ul>
      </footer>
      </main>
    </Layout>
  )

}

module.exports = Profile;