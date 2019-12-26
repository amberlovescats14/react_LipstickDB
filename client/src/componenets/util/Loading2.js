import React from 'react'
import Gif from './giphyLoading.webp'

export default function Loading() {
  return (
    <div style={spinnerStyle}>
      <img src={Gif} alt="Loading..."/>
    </div>
  )
}
const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center'
}