import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: green;
`
const Button = styled.button`
  width: 300px;
  height: 150px;
  background-color: red;
  color: white;
  border: none;
`

const Authform = ({ handleSubmit }) => {
  return (
    <Wrapper>
      <Button onClick={
        evt => {
          evt.preventDefault()
          handleSubmit('test35@email.com', '123')
        }
      }>
        Login
      </Button>
    </Wrapper>
  )
}

export default Authform
