import styled from 'styled-components'
import { Link } from '@reach/router'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 800px;
  height: 100%;
`

export const CardContainer = styled.div`
  margin: 0.66rem;
`

export const CardLink = styled(Link)`
  text-decoration: none;
`
