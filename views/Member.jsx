const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

function Member(props) {
  console.log(props);
  return (
    <Layout title="Member">
      <header>
      <img src='/images/main-logo.png' />
         <div>
          <img src={props.member.image} />
          <p>Your current points are: {props.member.points}</p>
          <p>{props.member.status}</p>
        </div>
        <a href="/auth/logout">
          <button>Log out</button>
        </a>
      </header>

      <main>
        <h1>Member Page</h1>
        {props.allPosts.map((post, i) => {
          return (
            <div className="article">
              <div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <img src={post.image} />
              </div>

              <h4> Comment</h4>
              {/*We need to create an action to allow this button to dropdown the form*/}

              <form
                id="article-form"
                action={`/private/posts/comment/${post._id}`}
                method="POST"
              >
                <input type="text" name="comment" placeholder="Comment"></input>
                <br />
                <button type="submit">Submit</button>
                {/* Button to submit the text you have written in the comment.*/}
              </form>

              {/*map of the comments that return the comment with the title */}

              {post.comments.map((commentObj) => {
                return (
                  <div>
                    <p>{commentObj.member.email}</p>
                    <p>{commentObj.comment}</p>
                  </div>
                );
              })}

              {String(props.member._id) === String(post.creator) ? (
                <a href={`/private/updatepost/${post._id}`}>
                  <button> Edit</button>
                </a>
              ) : null}

              {/* Link the AddPost page */}


              <form action={`/private/deletepost/${post._id}`} method="GET">
                <button>Delete</button>
              </form>
            </div>
          );
        })}
        <form action={'/private/posts/add/'} method="GET" >
          <button>Add New Post</button>
        </form>

        <footer>
          <ul>
            <li>
              <a href="/private/posts/add">
                <img src="/images/NewPost.png" alt="New post icon" />
              </a>
              <br />
              <label>New Post</label>
            </li>
            <li>
              <a href="/private/donation">
                <img src="/images/Donation.jpg" alt="Donation icon"/>
              </a>
              <br />
              <label>Donate</label>
            </li>
            <li>
              <a href="/private/edit-profile">
                <img src="/images/Profile.png" alt="Profile icon" />
              </a>
              <br />
              <label>Profile</label>
            </li>
          </ul>
        </footer>
      </main>
    </Layout>
  );
}

module.exports = Member;
