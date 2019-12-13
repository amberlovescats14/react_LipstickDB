import Cards from '../componenets/lipstickComponents/Cards'
import { connect } from 'react-redux'
import { getLipsticks } from '../redux/Actions'

const mapStateToProps = state => ({
  test: state.test,
  lipstickObject: state.lipstickObject
})

const mapDispatchToProps = dispatch => ({
  getLipsticks : () => dispatch(getLipsticks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)

