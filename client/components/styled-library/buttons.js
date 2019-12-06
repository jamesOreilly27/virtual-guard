import styled from 'styled-components'
import { ColumnAllCenter} from './containers'

export const Button = styled(ColumnAllCenter)`
  background-color: ${({ backgroundColor }) => backgroundColor };
  color: ${({ color }) => color };
  width: 10vw;
  height: 3vh;
  border-radius: 20%;
`
