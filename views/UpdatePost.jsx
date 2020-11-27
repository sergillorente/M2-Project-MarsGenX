const React = require("react");
const Layout = require("./Layout");

function UpdatePost(props) {
  // props =  { postId: postId }
  return (
    <Layout title="Update Post">
      <header className="header">
        <img className="logoImage" src='/images/main-logo.png' />
        <div className="margin-profile-p">
          <img className="profileImage" src={props.member.image} />
          <p>Points: {props.member.points}</p>
          <p>Status: {props.member.status}</p>
        </div>
      </header>

      <h1 className = "pageTitle">Update post</h1>
      <form className= "centeredForm"
        id="form-setting"
        action={`/private/updatepost/${props.postId}`}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Title:</label>
        <br />
        <input type="text" name="title" placeholder="Update Title" defaultValue={props.post.title} />
        <br />
        <label>Text:</label>
        <br />
        <input type="text" name="text" placeholder="Write your post" defaultValue={props.post.text} />
        <br />
        <input type="file" name="image" />
        <br/>
        <button type="submit">Update Post</button>{" "}

      </form>

      <form action={`/private/deletepost/${props.postId}`} method="GET" >
        <button className="delete-button">Delete</button>
      </form>

      <footer>
        <ul className="private-ul">
          <li>
            <a href="/private/posts/add">
              <img src="/images/new.png" alt="New post icon" />
            </a>
            <br />
            <label className="update-icons">New Post</label>
          </li>
          <li>
            <a href="/private/donation">
              <img src="/images/donation.png" alt="Donation icon" />
            </a>
            <br />
            <label className="update-icons">Donate</label>
          </li>
          <li>
            <a href="/private/member">
              <img src="/images/membership.png" alt="Profile icon" />
            </a>
            <br />
            <label className="update-icons">Member</label>
          </li>
          <li>
            <a href="/private/edit-profile">
              <img src="/images/profile-user.png" alt="Profile icon" />
            </a>
            <br />
            <label className="update-icons">Profile</label>
          </li>
        </ul>
      </footer>
    </Layout>
  );
}

module.exports = UpdatePost;
