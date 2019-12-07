import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import { fetchUserThunk } from '../../store'

class Homepage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => {
  return {
    getUser(type) {
      return dispatch(fetchUserThunk())
    }
  }
}

export default connect(mapState, mapDispatch)(Homepage)
