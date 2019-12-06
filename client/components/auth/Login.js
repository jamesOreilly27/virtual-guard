import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authLogin } from '../../store'
import Authform from './Authform'

const mapState = state => ({
  displayName: 'ResidentLogin'
})

const mapDispatch = (dispatch, ownProps) => ({
  handleSubmit(email, password) {
    dispatch(authLogin(email, password, ownProps.history, ownProps.match.params.usertype))
  }
})

const Login = withRouter(connect(mapState, mapDispatch)(Authform))

export default Login
