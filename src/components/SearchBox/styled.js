import styled from 'styled-components'
import { TextField, MenuItem as MuiMenuItem } from '@material-ui/core'

export const Input = styled(TextField)`
  && {
    padding: 0 10rem;
    margin-bottom: 1rem;
    box-sizing: border-box;

    .MuiInputBase-root {
      font-family: ${props => props.theme.fontFamily};
    }

    .Mui-focused {
      border-bottom-color: ${props => props.theme.purple};
    }
  }
`

export const MenuItem = styled(MuiMenuItem)`
  && {
    font-family: ${props => props.theme.fontFamily};
  }
`
