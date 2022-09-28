import React from 'react'
import { Card } from './styles'

const PokemonCard = ({ name }) => {
  return (
    <Card>
      <h3>{name}</h3>
    </Card>
  )
}

export default PokemonCard