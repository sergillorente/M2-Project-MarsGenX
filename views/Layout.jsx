const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = Layout;
