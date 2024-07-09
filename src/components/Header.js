import React, { useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import iconHamburger from '../assets/images/icon-hamburger.svg';
import iconArrowDark from '../assets/images/icon-arrow-dark.svg';
 

const Header = () => {

  useEffect(() => {
    const hamburgerIconElement = document.querySelector('.hamburger-icon');
    const headerElement = document.getElementById('header');
    const navLinksElement = document.querySelectorAll('.nav-link');
  


    const handleHamburgerClick = () => {
      headerElement.classList.toggle('active');
      console.log('Header class toggled:', headerElement.classList);
    };

    const handleNavLinkClick = (event) => {
      navLinksElement.forEach(nav => {
        nav.classList.remove('open');
      });
      event.currentTarget.classList.toggle('open');

    };

    hamburgerIconElement.addEventListener('click', handleHamburgerClick);
    navLinksElement.forEach(nav => {
      nav.addEventListener('click', handleNavLinkClick);
    });

    
    return () => {
      hamburgerIconElement.removeEventListener('click', handleHamburgerClick);
      navLinksElement.forEach(nav => {
        nav.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return (
    <header id="header">
      <div className="head">
        <img id="logo" className="logo-top" alt="brand of the blogr" src={logo} />
        <img
          id="iconHamburgerImg"
          className="hamburger-icon"
          alt="icon-hamburger"
          src={iconHamburger}
        />
      </div>
      <nav>
        <div className="nav-links">
          <ul className="nav-link">
            <button>
              Product{' '}
              <img
                id="iconarrowdark-product"
                alt="dark arrow"
                src={iconArrowDark}
              />
            </button>
            <div>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
            </div>
          </ul>
          <ul className="nav-link">
            <button>
              Company{' '}
              <img
                id="iconarrowdark-company"
                alt="dark arrow"
                src={iconArrowDark}
              />
            </button>
            <div>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </div>
          </ul>
          <ul className="nav-link">
            <button>
              Connect{' '}
              <img id="iconarrowdark" alt="dark arrow" src={iconArrowDark} />
            </button>
            <div>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="nav-btns spacing-top-login">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
