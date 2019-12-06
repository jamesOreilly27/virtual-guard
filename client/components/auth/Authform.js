import React from 'react'
import styled from 'styled-components'
import { RowAllCenter, Button, Form, Label, Input } from '../styled-library'

const Authform = ({ handleSubmit }) => {
  return (
    <Form>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="text"
          name="password"
          required
        />
      </Label>
      <Button onClick={
        evt => {
          evt.preventDefault()
          handleSubmit('test35@email.com', '123')
        }}
        backgroundColor='blue'
        color='white'
      >
        Login
      </Button>
    </Form>
  )
}

export default Authform
