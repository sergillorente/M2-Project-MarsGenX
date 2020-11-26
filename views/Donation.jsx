const React = require("react");
const Layout = require('./Layout')



function Donation(props) {
  return (
    <Layout title="Donation">
      <header>
        <img src='/images/main-logo.png' />
         <div>
          <img src={props.member.image} />
          <p>Your current points are: {props.member.points}</p>
          <p>{props.member.status}</p>
        </div>
        <a href ="/auth/logout">
          <button>Log out</button>
        </a>
      </header>

      <main>
        <h1>Donation Page</h1>

        <form id="donation-form" action="donation" method="POST">
          <label>Your donation:</label>
            <br/>
            <input type="text" name="points" placeholder="1€ = 10pts"></input>
            <br/>
            <button type="submit">Donate</button>
        </form>
        {
            props.thankYouMessage
          ? <div className = "thank-you-message">{props.thankYouMessage}</div>
          : null
          }

        <footer>

          <ul>

            <li>
              <a href="/private/member">
                <img src="/images/Member.png" alt="Member icon" />
              </a>
              <br/>
              <label>Member Page</label>
            </li>
            <li>
              <a href="/private/edit-profile">
                <img src="/images/Profile.png" alt="Profile icon" />
              </a>
              <br/>
              <label>Profile</label>
            </li>

          </ul>
        </footer>
      </main>

    </Layout>
  )
}

module.exports = Donation;