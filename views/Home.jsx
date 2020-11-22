const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home">
      <footer>
        <ul>
          <li><a href="" target="_blank"><i class="fa fa-facebook fa-fw"></i>Log in</a></li>
          <li><a href="" target="_blank"><i class="fa fa-instagram fa-fw"></i>Sign up</a></li>
        </ul>
        <p>MarsGenX © 2020</p>
      </footer>
    </Layout>
  );
}

module.exports = Home;
