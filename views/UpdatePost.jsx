const React = require("react");
const Layout = require("./Layout");

function UpdatePost(props) {
  // props =  { postId: postId }
  return (
    <Layout title="Update Post">
      <header>
        <img src='/images/main-logo.png' />
        <div>
          {/*{props.member.image}
        {props.member.points}
        {props.member.status}  */}
        </div>
      </header>

      <h1>Update post</h1>
      <form
        id="form-setting"
        action={`/private/updatepost/${props.postId}`}
        method="POST"
        encType="multipart/form-data"
      >
        <label>Title:</label>
        <br />
        <input type="text" name="title" placeholder="Update Title" defaultValue={props.post.title}/>
        <br />
        <label>Text:</label>
        <br/>
        <input type="text" name="text" placeholder="Write your post" defaultValue={props.post.text}/>
        <br />
        <input type="file" name="image" />
        {/*<input type="file" name="image" placeholder="choose your image"></input>*/}
        <button type="submit">Update Post</button>{" "}

      </form>

      <form action={`/private/deletepost/${props.postId}`} method="GET" >
        <button>Delete</button>
      </form>
    </Layout>
  );
}

module.exports = UpdatePost;
