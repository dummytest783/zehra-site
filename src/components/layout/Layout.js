import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="site-main">
        <div className="main-content">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
