'use strict'

import React,  { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions' >
    <button onClick={ getRepos } >Ver repositório</button>
    <button onClick={ getStarred } >Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions