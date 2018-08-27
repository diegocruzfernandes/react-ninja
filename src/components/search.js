'use strict'

import React, { PropTypes } from 'react'


const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      disabled={isDisabled}
      onKeyUp={handleSearch} />
  </div>
)

export default Search

Search.protoTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}
