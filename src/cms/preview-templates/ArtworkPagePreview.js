import React from 'react'
import PropTypes from 'prop-types'
import { ArtworkPageTemplate } from '../../templates/artwork-page'

const ArtworkPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ArtworkPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        intro={data.intro || { portfolio: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ArtworkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ArtworkPagePreview 
