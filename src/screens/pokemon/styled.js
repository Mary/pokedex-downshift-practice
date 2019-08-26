import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div {
    margin: 0 100px;
  }
`

export const Link = styled(RouterLink)`
  position: absolute;
  top: 3rem;
  left: 3rem;
  text-decoration: none;
  color: ${props => props.theme.black};

  :hover {
    text-decoration: underline;
  }
`
