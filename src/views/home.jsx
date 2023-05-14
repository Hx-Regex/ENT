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
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mawqeef</title>
        <meta property="og:title" content="Planical modern - Template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                Le moyen le plus rapide d'obtenir de la main-d'œuvre est de la chercher là où elle se trouve déjà <br />
                <span className='text-[20px] text-gray-400'>-Robert Half</span>
                </h1>
              </header>
              <div className="home-buttons">
                <a href='/hire' className="home-get-started button">
                  <span className="home-text">Get started</span>
                </a>
                <a href='/hire' className="home-get-started1 button">
                  <span className="home-text01">View features</span>
                </a>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image01 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image02 avatar"
                />
              </div>
              <label className="home-caption1">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image03">
            <img
              alt="image"
              src="https://cdn.discordapp.com/attachments/589338815869747203/1097253407493980280/Galaxy-S21-Ultra.png"
              className="home-image04"
            />
          </div>
          <div className="home-image05">
            <img
              alt="image"
              src="https://cdn.discordapp.com/attachments/589338815869747203/1097252216831746079/Galaxy-S20-Ultra.png"
              className="home-image06"
            />
          </div>
        </div>
      </section>
      <section className="home-section01">
        <h2 className="home-text02">
           Notre assistance technique est disponible 24h/24 et 7j/7.
        </h2>

      </section>
      <section className="home-section02">

        <section className="home-note1">
          <div className="home-image09">
            <img
              alt="image"
              src="https://cdn.discordapp.com/attachments/589338815869747203/1097257249501622482/Mockup.png"
              className="home-image10"
            />
          </div>
          <div className="home-content2">
            <div className="home-main2">
              <div className="home-caption2">
                <span className="section-head">Tableau de bord</span>
              </div>
              <div className="home-heading02">
                <h2 className="section-heading">
                  Notre tableau de bord est extrêmement performant et intuitif
                </h2>
                <p className="section-description">
                Notre tableau de bord permet aux travailleurs de suivre leur travail et leur revenu à l'aide de graphiques clairs et précis. Grâce à ces outils visuels, ils peuvent facilement comprendre leur performance et leur évolution dans le temps, ce qui les aide à améliorer leur productivité et à maximiser leurs gains
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-note2">
          <div className="home-image11">
            <img
              alt="image"
              src="https://cdn.discordapp.com/attachments/589338815869747203/1097259402014249010/Mocku2p.png"
              className="home-image12"
            />
          </div>
          <div className="home-content3">
            <main className="home-main3">
              <header className="home-caption3">
                <span className="home-section04 section-head">
                  Application
                </span>
              </header>
              <main className="home-heading04">
                <header className="home-header02">
                  <h2 className="section-heading">
                  Notre application permet aux utilisateurs de trouver facilement des travailleurs qualifiés pour leurs projets.
                  </h2>
                  <p className="section-description">
                  Notre application innovante permet aux utilisateurs de trouver facilement des travailleurs qualifiés pour leurs projets. Grâce à des fonctionnalités de recherche avancées et une interface intuitive, les utilisateurs peuvent trouver rapidement des candidats qui correspondent à leurs besoins. De plus, notre plateforme fournit des outils de communication et de gestion de projet pour assurer une collaboration fluide et efficace entre les utilisateurs et les travailleurs.
                  </p>
                </header>
              
              </main>
            </main>
            {/* <div className="home-get-started3 button">
              <span className="home-text18">Get started</span>
            </div> */}
          </div>
        </section>
      </section>
 <section className="home-section09">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left1 side"></div>
        </div>

      </section>
      <section className="home-section10">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header06">
            <header className="home-left3">
              <span className="section-head">Formation</span>
              <h2 className="section-heading home-heading10">
              La formation est la clé de la réussite
              </h2>
            </header>
            <div className="home-right1">
            </div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header07">
                    <label className="home-name">Basic</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">500 MAD</h1>
                      <span className="home-duration"></span>
                    </div>
                  </div>
                  <p className="home-description1">
                  </p>
                </div>
                <div className="home-buy-details">
                  <div className="home-buy button">
                    <span className="home-text26">
                      <span>Start Basic</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features1">
                    <span className="home-heading11">You will get</span>
                    <div className="home-list">
                      <Includes  text= "Nous offrons une formation professionnelle dispensée par un coach expérimenté." rootClassName="includes-root-class-name"></Includes>
                      <Includes  text= "Nous vous proposons des sessions théoriques et pratiques jusqu’à ce que vous deveniez le meilleur du meilleur." rootClassName="includes-root-class-name"></Includes>
                      <Includes  text= "Nous sommes fiers de fournir une formation de qualité supérieure" rootClassName="includes-root-class-name"></Includes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header08">
                    <label className="home-name1">Professional</label>
                    <div className="home-pricing2">
                      <h1 className="home-price1">849 MAD</h1>
                      <span className="home-duration1"></span>
                    </div>
                  </div>
                  <p className="home-description2">
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-buy1 button">
                    <span className="home-text29">
                      <span>Start Professional</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features2">
                    <span className="home-heading12">You will get</span>
                    <div className="home-list1">
                      <Includes  text= "Nous offrons une formation professionnelle dispensée par un coach expérimenté." rootClassName="includes-root-class-name"></Includes>
                      <Includes  text= "Nous vous proposons des sessions théoriques et pratiques jusqu’à ce que vous deveniez le meilleur du meilleur." rootClassName="includes-root-class-name"></Includes>
                      <Includes  text= "Nous sommes fiers de fournir une formation de qualité supérieure" rootClassName="includes-root-class-name"></Includes>
                      <Includes  text= "Nous vous inclurons dans notre adhésion PRO pour montrer à nos clients que vous êtes digne de confiance pour notre entreprise." rootClassName="includes-root-class-name"></Includes>
                    </div>
                  </div>
                </div>
              </div>

            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text35">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text38">Contact support -&gt;</p>
          </div>
        </div>
      </section>
    
      
     
      <footer className="home-footer">
        <div className="home-content6">
          <main className="home-main-content">
            <div className="home-content7">
              <header className="home-main4">
                <div className="home-header14">
                  <img
                    alt="image"
                    src="https://cdn.discordapp.com/attachments/589338815869747203/1104395491992682536/maw1.png"
                    className="home-branding"
                  />
                  <span className="home-text43">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="#"
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
                    href="https://www.instagram.com/mawqeef_maroc/"
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
                </div>
              </header>
              <header className="home-categories">

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
              © 2022 Mawqeef. All Rights Reserved.
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
              © 2022 Mawqeef. All Rights Reserved.
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
