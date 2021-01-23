import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import logo from '../img/logo.svg'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({ image, title, links }) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom left`,
        backgroundAttachment: `fixed`,
        display: 'block',
      }}
    >
      <div className="index-logo">
        <Link to="/" title="Logo">
          <img src={logo} alt="Rebecca Foran Logo" style={{ width: '35px' }} />
        </Link>
      </div>
      <div
        style={{
          position: 'relative',
          top: '25vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            margin: 'auto',
            justifyContent: 'space-around',
            flexDirection: 'row',
            textAlign: 'center',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: '#616f75',
              color: 'white',
              lineHeight: '1.5',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      <div className="homepage-link-container">
        {links.map((link) => (
          <Link key={link.link} className="homepage-link" to={link.link}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  links: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout hidenav="true">
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        links={frontmatter.links}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        links {
          link
          text
        }
      }
    }
  }
`
