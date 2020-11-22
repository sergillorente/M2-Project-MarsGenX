const React = require("react");
const Layout = require("./Layout");

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(element, document.body)


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
