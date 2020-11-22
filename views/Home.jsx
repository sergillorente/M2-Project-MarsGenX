const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home">
       
        

      <header>
        <img href="../public/images/main-logo.png" />
      </header>
        <h1> What is MarsGenX?</h1>

        <br/>
          <img src="../public/images/homepage-image.jpg" />
        <p>
          The main purpose of MarsGenX is to support the missions to mars of
          SpaceX and to give to its community a specific space where they share
          thought on the missions.
        </p>
      <br/>
      <ul>

        <li>
          <a>
            <button type="submit" > Sign up</button>
          </a>
          <br/>
        </li>

        <li>
          <a>
            <button type="submit" > Login</button>
          </a>
          <br/>
        </li>
      
      </ul>

        <p>MarsGenX © 2020</p>
    </Layout>
  );
}

module.exports = Home;
