import React from 'react';

const Footer = () => {

  return (
    <div>
      <footer className="footer-distributed">
          <div className="footer-right">
            <a href="https://github.com/SomayaB/reacTube">View code <i className="fa fa-github fa-2x"></i></a>
          </div>
          <div className="footer-left">
            <p className="footer-description">
              ReacTube is a Youtube clone built in ReactJS.
            </p>
            <p>© 2018 Copyright SomayaB</p>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
