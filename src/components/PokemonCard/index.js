import React from 'react'
import { CardMedia } from '@material-ui/core'

import * as S from './styled'

export default function Tile({ pokemon, isSmall, animateHovering }) {
  return (
    <S.Card isSmall={isSmall} animateHovering={animateHovering}>
      {isSmall ? (
        <p>
          <b>{pokemon.name}</b>
        </p>
      ) : (
        <h2>{pokemon.name}</h2>
      )}
      <CardMedia>
        <S.Img src={pokemon.img} isSmall={isSmall} />
      </CardMedia>
      <S.CardContent isSmall={isSmall}>
        {isSmall ? (
          <>
            <S.Text isSmall>
              <b>Type:</b> {pokemon.type.toString().replace(/,/g, ', ')}
            </S.Text>
            <S.Text isSmall>
              <b>Weaknesses:</b>{' '}
              {pokemon.weaknesses.toString().replace(/,/g, ', ')}
            </S.Text>
          </>
        ) : (
          <>
            <S.Text>
              <b>Weight:</b> {pokemon.weight}
            </S.Text>
            <S.Text>
              <b>Height:</b> {pokemon.height}
            </S.Text>
            <S.Text>
              <b>Type:</b> {pokemon.type.toString().replace(/,/g, ', ')}
            </S.Text>
            <S.Text>
              <b>Weaknesses:</b>{' '}
              {pokemon.weaknesses.toString().replace(/,/g, ', ')}
            </S.Text>
            <S.Text>
              <b>Egg:</b> {pokemon.egg}
            </S.Text>
          </>
        )}
      </S.CardContent>
    </S.Card>
  )
}
