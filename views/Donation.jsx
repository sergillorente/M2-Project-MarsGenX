const React = require("react");
const Layout = require('./Layout')

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(element, document.body)



function Donation() {
  return (
    <Layout title="Donation">

    </Layout>
  )
}

module.exports = Donation;