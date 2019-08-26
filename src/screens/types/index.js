import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import _ from 'lodash'

import TypeSearch from '../../components/TypeSearch'
import PokemonCard from '../../components/PokemonCard'
import * as S from './styled'

export default function TypeExample() {
  const { loading, error, data } = useQuery(gql`
    {
      pokemonMany {
        name
        num
        img
        type
        weaknesses
      }
    }
  `)
  if (loading)
    return (
      <S.Container>
        <p>Loading...</p>
      </S.Container>
    )
  if (error)
    return (
      <S.Container>
        <p>Error :(</p>
      </S.Container>
    )
  return (
    <S.Container>
      <h1>Pokédex</h1>
      <TypeSearch>
        {searchValue => (
          <S.Grid>
            {data.pokemonMany
              .filter(pokemon =>
                searchValue
                  ? _.deburr(pokemon.name.toLowerCase()).includes(
                      _.deburr(searchValue.toLowerCase())
                    )
                  : true
              )
              .map(pokemon => (
                <S.CardContainer key={pokemon.num}>
                  <S.CardLink to={`/${pokemon.num}`}>
                    <PokemonCard
                      key={pokemon.num}
                      pokemon={pokemon}
                      isSmall
                      animateHovering
                    />
                  </S.CardLink>
                </S.CardContainer>
              ))}
          </S.Grid>
        )}
      </TypeSearch>
    </S.Container>
  )
}
