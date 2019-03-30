// TODO: Reimplement debouncing!

import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

export const ClientInnerWidth = ({ children, debounce = 5 }) => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      // if (Math.abs(width - window.innerWidth > debounce))
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
  return children({ width })
}

export const ScaleImg = ({
  url,
  clientWidth,
  aspect = 1.5,
  bgPosition = 'center',
  fixHeight = null,
}) => {
  const selfRef = useRef(null)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    scaleImgY(clientWidth)
  }, [])

  useEffect(() => {
    selfRef && scaleImgY(clientWidth)
  }, [clientWidth])

  const scaleImgY = clientWidth => {
    if (!selfRef || !selfRef.current) return
    const selfWidth = selfRef.current.clientWidth
    const height = selfWidth / aspect
    setHeight(height)
    return height
  }

  const Crop = styled.div`
    width: 100%;
    height: ${({ fixHeight }) => fixHeight || height}px;
  `

  const Img = styled.div`
    height: 100%;
    width: auto;
    background-image: url(${({ url }) => url});
    background-size: cover;
    background-position: ${({ bgPosition }) => bgPosition};
  `

  return (
    <Crop clientWidth={clientWidth} ref={selfRef} fixHeight={fixHeight}>
      <Img url={url} bgPosition={bgPosition} />
    </Crop>
  )
}
