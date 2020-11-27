const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home">
      <header className="header-home">
        <img src='/images/main-logo.png' className="home-logo"/>
      </header>

      <main className="home-text">
        <h1 className="mars-title"> What is MarsGenX?</h1>
        <br/>
        <p className="mars-text">The main purpose of MarsGenX is to support the missions to mars of SpaceX and to give to its community a specific space where they share thought on the missions.
        </p>

        <ul className="home-buttons">

          <li className="signup-button-home">
            <a href="/auth/signup">
              <button type="submit">Sign up</button>
            </a>
            <br/>
          </li>
          <li>
            <a href="/auth/login">
              <button type="submit" >Login</button>
            </a>
            <br/>
          </li>

        </ul>

      </main>
        
      <footer className="home-footer">
        <p>MarsGenX © 2020</p>
        <p>https://www.flaticon.com/authors/freepik</p>
      </footer>
        
    </Layout>
  );
}

module.exports = Home;
