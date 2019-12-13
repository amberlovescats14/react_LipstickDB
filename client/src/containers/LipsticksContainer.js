import Lipsticks from '../componenets/Lipsticks'
import { connect } from 'react-redux'
import { getLipsticks } from '../redux/Actions'

const mapStateToProps = state => ({
  test: state.test,
  lipstickObject: state.lipstickObject
})

const mapDispatchToProps = dispatch => ({
  getLipsticks : () => dispatch(getLipsticks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lipsticks)