const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout title="Home">
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      <footer>
        <ul>
          <li><a href="" target="_blank"><i class="fa fa-facebook fa-fw"></i></a></li>
          <li><a href="" target="_blank"><i class="fa fa-instagram fa-fw"></i></a></li>
        </ul>
        <p>MarsGenX © 2020</p>
      </footer>
    </Layout>
  );
}

module.exports = Home;
