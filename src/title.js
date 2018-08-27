'use strict'

import React from 'react'


const Title = (props) => <h1>Oi {`${props.name} ${props.lastname.first} ${props.lastname.last}`}</h1>
Title.defaultProps = {
  name: 'Sem Nome',
  lastname: {
    first: 'primeiro nome',
    last: 'último nome'
  }
}

export default Title
