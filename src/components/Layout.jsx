import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="App">
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
