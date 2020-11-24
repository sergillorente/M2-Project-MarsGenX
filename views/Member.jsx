const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

function Member(props) {
  // props.member
  return (
    <Layout title="Member">
      <header>
        <img href="../public/images/main-logo.png" />
        <div>
          {props.member.image}
          {props.member.points}
          {props.member.status}
        </div>
      </header>

      <main>
        <h1>Member Page</h1>
        {props.allPosts.map((post, i) => {
          return (
            <div className="article">
              <div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <aside> {post.image} </aside>
              </div>

              <h4> Comment</h4>
              {/*We need to create an action to allow this button to dropdown the form*/}

              <form
                id="article-form"
                action={`/private/posts/edit/${post._id}`}
                method="POST"
              >
                <input type="text" name="text" placeholder="Comment"></input>
                <br />
                <button type="submit">Submit</button>{" "}
                {/* Button to submit the text you have written in the comment. It needs to be added to the article as well*/}
              </form>
            </div>
          );
        })}

        <div>
          <div>
            <hr />
            <h1>Community Posts</h1>
          </div>

          <button type="button">Create Post</button>
          {/*We need to create an action to allow this button to dropdown the form*/}
          <form id="member-post-form" action="/private/posts/add" method="POST">
            <input type="text" name="title" placeholder="Title"></input>
            <br />
            <input
              type="text"
              name="text"
              placeholder="Write your post"
            ></input>
            <br />
            <input type="file" accept="image/*" name="image" id="file"></input>
            {/*<input type="file" name="image" placeholder="choose your image"></input>*/}
            <button type="submit">Add Post</button>{" "}
            {/* Button to submit the text you have written in the comment. It needs to be added to the article as well*/}
          </form>
        </div>

        <footer>
          <ul>
            <li>
              <a>
                <img
                  href="./../public/images/NewPost.png"
                  alt="New post icon"
                />
              </a>
              <br />
              <label>New Post</label>
            </li>
            <li>
              <a>
                <img
                  href="./../public/images/Donation.jpg"
                  alt="Donation icon"
                />
              </a>
              <br />
              <label>Donate</label>
            </li>
            <li>
              <a>
                <img href="./../public/images/Profile.png" alt="Profile icon" />
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
