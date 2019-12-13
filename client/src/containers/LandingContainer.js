import Landing from '../componenets/Landing'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  test: state.test
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)