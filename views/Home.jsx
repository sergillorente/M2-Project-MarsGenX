const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home">
      <img src="../public/images/homepage-image.jpg" />{/*This image is the background image for the whole body*/}

      <header>
        <img src='/images/main-logo.png' />{/*The logo should be in the top center part of the main*/}
      </header>

      <main>
        <h1> What is MarsGenX?</h1>
        <br/>
        <p>The main purpose of MarsGenX is to support the missions to mars of SpaceX and to give to its community a specific space where they share thought on the missions.
        </p>

        <ul>

          <li>
            <a href="/auth/signup">
              <button type="submit" >Sign up</button>
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
        
      <footer>
        <p>MarsGenX © 2020</p>
      </footer>
        
    </Layout>
  );
}

module.exports = Home;
