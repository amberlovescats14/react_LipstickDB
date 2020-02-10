import React from 'react'

export default function Landing(props) {
  const {test} = props
 
  return (
    <div style={{height: '100vh'}}>
      <h2>landing</h2>
      {test}
    </div>
  )
}
