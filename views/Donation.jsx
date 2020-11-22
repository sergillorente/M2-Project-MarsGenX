const React = require("react");
const Layout = require('./Layout')



function Donation() {
  return (
    <Layout title="Donation">
      <main>
        <h1>Donation Page</h1>

        <form id="donation-form" action="donation" method="POST">

        </form>
      </main>

    </Layout>
  )
}

module.exports = Donation;