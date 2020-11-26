const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function AddPost(props) {
    console.log(props)
    return (
        <Layout title="Add Post">
            <header>
                <img src='/images/main-logo.png' />
                <div>
                    <img src={props.member.image} />
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
                    <ul>
                        <li>
                            <a>
                                <img
                                    src="/images/NewPost.png"
                                    alt="New post icon"
                                />
                            </a>
                            <br />
                            <label>New Post</label>
                        </li>
                        <li>
                            <a>
                                <img
                                    src="/images/Donation.jpg"
                                    alt="Donation icon"
                                />
                            </a>
                            <br />
                            <label>Donate</label>
                        </li>
                        <li>
                            <a>
                                <img src="/images/Profile.png" alt="Profile icon" />
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