const React = require("react");
const Layout = require('./Layout')



function Donation() {
  return (
    <Layout title="Donation">
      {<header>
        {/* <img logo image/> */}
        <div>
          {/* <img />
          <p>Current points and status</p> */}
        </div>
      </header>}
      
      <main>
        <h1>Donation Page</h1>

        <form id="donation-form" action="donation" method="POST">
          <label>Your donation</label>
            <br/>
            <input type="text" name="donation-amount" placeholder="1€ = 10pts"></input>
            <br/>
            <button type="submit">Donate</button>
        </form>

        <footer>

          <ul>

            <li>
              <a>
                <img href="./../public/images/Member.png" alt="Member icon" />
              </a>
              <br/>
              <label>Member Page</label>
            </li>
            <li>
              <a>
                <img href="./../public/images/Profile.png" alt="Profile icon" />
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