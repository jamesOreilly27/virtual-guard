import styled from 'styled-components'
import { ColumnAllCenter} from './containers'

export const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor };
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color };
  width: 10vw;
  height: 3vh;
  border-radius: 10px;
`
