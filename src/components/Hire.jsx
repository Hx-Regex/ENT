import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Mark from '../components/mark'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Review from '../components/review'
import Article from '../components/article'
import FAQ from '../components/faq'
import Filters from './Filters'
import ImageHero from './ImageHero'
const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern - Template</title>
        <meta property="og:title" content="Planical modern - Template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className='w-full justify-center flex items-center flex-wrap'>
            <div className='flex flex-col justify-center   w-full h-full'>
              <ImageHero />
              <Filters />
            </div>
        </div>
         
       
     
      <footer className="home-footer">
        <div className="home-content6">
          <main className="home-main-content">
            <div className="home-content7">
              <header className="home-main4">
                <div className="home-header14">
                  <img
                    alt="image"
                    src="/playground_assets/planical7012-ttpb.svg"
                    className="home-branding"
                  />
                  <span className="home-text43">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header15">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home-category1">
                  <div className="home-header16">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text57">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main5">
              <h1 className="home-heading18">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy3 button">
                  <span className="home-text58">-&gt;</span>
                  <span className="home-text59">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home-copyright1">
            <span className="home-text62">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
      </div>
    </div>
  )
}

export default Home
