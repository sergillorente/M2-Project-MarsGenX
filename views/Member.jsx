const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

function Member(props) {
  return (
    <Layout title="Member">
      <header className="header">
        <img className="logoImage" src='/images/main-logo.png' />
        <div className="margin-profile-p">
          <img className="profileImage" src={props.member.image} />
          <p>Points: {props.member.points}</p>
          <p>Status: {props.member.status}</p>
        </div>
      </header>

      <main className= "textColor">

      <br/>
              <br/>

        <h1 className = "pageTitle">Member Page</h1>
        

        <br/>
        <br/>


        {props.allPosts.map((post, i) => {
          return (
            <div className="article">
              <div>
                <h3 className = "pageTitle">{post.title}</h3>
                <br/>
                <br/>
                <p>{post.text}</p>
                <br/>
                <br/>
                <img src={post.image} />
              </div>

              
              {/*We need to create an action to allow this button to dropdown the form*/}


                
              <form className= "centeredForm"
                id="article-form"
                action={`/private/posts/comment/${post._id}`}
                method="POST"
              >
                <input type="text" name="comment" placeholder="Comment"></input>
                <br />
                <button type="submit">Submit</button>
                {/* Button to submit the text you have written in the comment.*/}
              </form>

              <br/>
              <br/>


              {/*map of the comments that return the comment with the title */}

              {post.comments.map((commentObj) => {
                return (
                  <div>
                    <p>{commentObj.member.email}</p>
                    <br/>
                    <br/>
                    <p>{commentObj.comment}</p>
                  </div>
                );
              })}


    

              {String(props.member._id) === String(post.creator) ? (
                <a className= "centeredForm" href={`/private/updatepost/${post._id}`}>
                  <button> Edit</button>
                </a>
              ) : null}
              <br/>
                <br/>

              <form className= "centeredForm" action={`/private/deletepost/${post._id}`} method="GET">
                <button>Delete</button>
              </form>
             

              <br/>
                <br/>

            </div>
          );
        })}
        <form className= "centeredForm" action={'/private/posts/add/'} method="GET" >
          <button>Add New Post</button>
        </form>

        <br/>
        <br/>

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
  );
}

module.exports = Member;
