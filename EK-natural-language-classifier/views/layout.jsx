import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';


// eslint-disable-next-line

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>EK Natural Language Classifier Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />


        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>

      

        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        { props.bluemixAnalytics ? <script type="text/javascript" src="js/analytics.js" /> : null }
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  bluemixAnalytics: PropTypes.bool.isRequired,
};

export default Layout;
