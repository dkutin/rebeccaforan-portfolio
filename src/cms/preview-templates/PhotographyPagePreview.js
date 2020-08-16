import React from 'react'
import PropTypes from 'prop-types'
import { PhotographyPageTemplate } from '../../templates/photography-page'

const PhotographyPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PhotographyPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        intro={data.intro || { portfolio: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PhotographyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PhotographyPagePreview
