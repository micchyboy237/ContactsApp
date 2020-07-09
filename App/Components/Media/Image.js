import React, { useState, useRef } from 'react'
import FastImage from 'react-native-fast-image'

const FastImageContainer = props => {
  const { style, width, height, ...allProps } = props
  const [imgWidth, setImgWidth] = useState(width)
  const [imgHeight, setImgHeight] = useState(height)
  const [reloadKey, setReloadKey] = useState('')
  const intervalRef = useRef('')

  return (
    <FastImage
      key={reloadKey}
      style={[style, { width: imgWidth, height: imgHeight }]}
      {...allProps}
      onLoad={() => {
        clearInterval(intervalRef.current)
      }}
      onError={() => {
        if(!intervalRef.current) {
          const interval = setInterval(() => {
            setReloadKey(Date.now().toString())
          }, 2000)

          intervalRef.current = interval
        }
      }}
    />
  )
}

FastImageContainer.defaultProps = {
  resizeMode: 'cover',
  source: {},
  width: 0,
  height: 0
}

export default FastImageContainer
