import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-6">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/" >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-6 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    className="fas fa-lg"
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    className="fas fa-lg"
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    className="fas fa-lg"
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
