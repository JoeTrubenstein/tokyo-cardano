/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children, specialNav }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <NavBar siteTitle={data.site.siteMetadata.title} specialNav={specialNav} />
      <div
        className="dark:bg-nightBack"
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`
        }}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
