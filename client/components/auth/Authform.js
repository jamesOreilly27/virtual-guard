import React from 'react'
import styled from 'styled-components'
import { Button, Form, Label, Input } from '../styled-library'

const Authform = ({ handleSubmit }) => {
  return (
    <Form onSubmit={
      evt => {
        evt.preventDefault()
        handleSubmit(evt.target.email.value, evt.target.password.value)
      }}
    >
      <Label>
        Email
        <Input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <Input type="text" name="password" required />
      </Label>
      <Button backgroundColor='blue' color='white'>
        Login
      </Button>
    </Form>
  )
}

export default Authform
