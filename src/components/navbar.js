import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css'

const Navbar = (props) => {
  const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}



  const history = useHistory();
  return (
    <nav className={`navbar-navbar`}>
      <img
        onClick={() => history.push('/')}
        alt="Planical7012"
        src="https://cdn.discordapp.com/attachments/589338815869747203/1104395491992682536/maw1.png"
        className="navbar-branding-logo"
      />
      <div className="navbar-nav-content">
        <div className="navbar-nav-links">
          <span onClick={() => history.push('/hire')} className="nav-link">Hire Now</span>
        </div>
        <div className="get-started navbar-get-started">
          <span onClick={() => history.push('/login')} className="navbar-text">Sign in</span>
        </div>
        <div id="open-mobile-menu"  onClick={() => runMobileMenuCodeEmbed()} className="navbar-hamburger get-started">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
        </div>
      </div>
      <div id="mobile-menu" onClick={() => runMobileMenuCodeEmbed()} className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.image_alt1}
            src="https://cdn.discordapp.com/attachments/589338815869747203/1104395491992682536/maw1.png"
            className="navbar-image1"
          />
          <div id="close-mobile-menu" className="navbar-container">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links1">
          <span onClick={() => history.push('/hire')} className="nav-link">Hire Now</span>
        </div>
        <div className="get-started">
          <span onClick={() => history.push('/')} className="navbar-text1">Join Us</span>
        </div>
        
      </div>
      <div className="">

      </div>
      
    </nav>
  )
}

Navbar.defaultProps = {
  image_alt: 'image',
  image_src1: '/playground_assets/planical7012-ttpb.svg',
  image_src: '/playground_assets/hamburger-200h.png',
  image_alt1: 'image',
  rootClassName: '',
  BrandingLogo: '/playground_assets/planical7012-wzf.svg',
}

Navbar.propTypes = {
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo: PropTypes.string,
}

export default Navbar
