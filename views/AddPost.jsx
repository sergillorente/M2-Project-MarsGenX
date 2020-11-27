const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function AddPost(props) {
    return (
        <Layout title="Add Post">
            <header className="header">
                <img className="logoImage" src='/images/main-logo.png' />
                <div className="margin-profile-p">
                    <img className="profileImage" src={props.member.image} />
                    <p>Your current points are: {props.member.points}</p>
                    <p>{props.member.status}</p>
                </div>
            </header>

            <main>
                <div>
                    <div>
                        <hr />
                        <h1>Community Posts</h1>
                    </div>

                    <form id="add-post-form" action="/private/posts/add" method="POST" encType="multipart/form-data">
                        <input type="text" name="title" placeholder="Title" />
                        <br />
                        <input type="text" name="text" placeholder="Write your post" />
                        <br />
                        <input type="file" name="image" />
                        <br />
                        <button type="submit">Add Post</button>
                        {/* Button to submit the text you have written in the comment. It needs to be added to the article as well*/}
                    </form>

                </div>
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

module.exports = AddPost;