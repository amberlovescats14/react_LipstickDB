import React from 'react'
import PropTypes from 'prop-types'

const Landing = props => {
  console.log(props);
  return (
    <div>
      <h1>Landing</h1>
    </div>
  )
}

Landing.propTypes = {
  // test: PropTypes.string.isRequired
}

export default Landing
