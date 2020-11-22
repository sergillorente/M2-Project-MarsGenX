const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home">
      <body>
        <h1> What is MarsGenX?</h1>
        <br></br>
        <div className="image">
          <img src="../public/images/homepage-image.jpg" />
        </div>
        <p>
          {" "}
          The main purpose of MarsGenX is to support the missions to mars of
          SpaceX and to give to its community a specific space where they share
          thought on the missions.
        </p>
      </body>
      <br></br>
      <footer>
        <ul>
          <li>
            <a href="" target="_blank">
              <i class="fa fa-facebook fa-fw"></i>Sign up
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i class="fa fa-instagram fa-fw"></i>Log in
            </a>
          </li>
        </ul>
        <p>MarsGenX © 2020</p>
      </footer>
    </Layout>
  );
}

module.exports = Home;
