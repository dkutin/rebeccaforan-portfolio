import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const generateKey = () => {
  var pre = (Math.random() * 100).toString()
  return `${pre}_${new Date().getTime()}`
}

var FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    <div className="column is-4" style={{ height: '100%' }}>
      {formatItems(gridItems.slice(0, Math.floor(gridItems.length / 3)))}
    </div>
    <div className="column is-4" style={{ height: '100%' }}>
      {formatItems(
        gridItems.slice(
          Math.floor(gridItems.length / 3),
          Math.floor(gridItems.length / 3) * 2
        )
      )}
    </div>
    <div className="column is-4" style={{ height: '100%' }}>
      {formatItems(
        gridItems.slice(Math.floor(gridItems.length / 3) * 2, gridItems.length)
      )}
    </div>
  </div>
)

var formatItems = function (gridItems) {
  if (!gridItems.length || !gridItems) {
    return
  }
  var nonce = generateKey()
  return gridItems.map((item, index) => (
    <div
      key={nonce + index}
      style={{
        width: '100%',
        height: '100%',
        display: 'inline-block',
        overflow: 'hidden',
        position: 'relative',
        padding: '0.25rem 0',
      }}
    >
      <div className="overlay">
        <div className="image-overlay" />
      </div>
      <PreviewCompatibleImage imageInfo={item} />
    </div>
  ))
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
