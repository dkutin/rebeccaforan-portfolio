import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'

export const ArtworkPageTemplate = ({
  image,
  title,
  intro,
}) => (
  <div key={ title }>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              '#616f75 0.5rem 0px 0px, #616f75 -0.5rem 0px 0px',
            backgroundColor: '#616f75',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="content">
                <Features key={title} gridItems={intro.portfolio} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ArtworkPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  intro: PropTypes.shape({
    portfolio: PropTypes.array,
  }),
}

const ArtworkPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ArtworkPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

ArtworkPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ArtworkPage

export const pageQuery = graphql`
  query ArtworkPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "artwork-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        intro {
          portfolio {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
