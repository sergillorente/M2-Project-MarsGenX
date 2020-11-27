const React = require("react");
const Layout = require('./Layout')



function Donation(props) {
  console.log("what is in the props member", props);
  return (
    <Layout title="Donation">
      <header className="header">
        <img className="logoImage" src='/images/main-logo.png' />
        <div className="margin-profile-p">
          <img className="profileImage" src={props.member.image} />
          <p>Your current points are: {props.member.points}</p>
          <p>{props.member.status}</p>
        </div>
      </header>

      <main>
        <h1>Donation Page</h1>

        <form id="donation-form" action="donation" method="POST">
          <label>Your donation:</label>
          <br />
          <input type="text" name="points" placeholder="1€ = 10pts"></input>
          <br />
          <button type="submit">Donate</button>
        </form>
        {
          props.thankYouMessage
            ? <div className="thank-you-message">{props.thankYouMessage}</div>
            : null
        }

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

module.exports = Donation;