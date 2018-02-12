import React from 'react';
import { Helmet } from "react-helmet";
const websiteTitle = process.env.REACT_APP_WEBSITE_NAME;

export default ({ title, description, keywords }) =>
  <Helmet>
    <title>{ `${websiteTitle} | ${title}` }</title>
    <meta name="description" content={ description } />
    <meta name="keywords" content={ keywords } />
  </Helmet>;