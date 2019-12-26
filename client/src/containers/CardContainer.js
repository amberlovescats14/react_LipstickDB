import Cards from '../componenets/lipstickComponents/Cards'
import { connect } from 'react-redux'
import { getLipsticks, deleteLipstick } from '../redux/Actions'

const mapStateToProps = state => ({
  test: state.test,
  lipstickObject: state.lipstickObject
})

const mapDispatchToProps = dispatch => ({
  getLipsticks : () => dispatch(getLipsticks()),
  deleteLipstick: (id) => dispatch(deleteLipstick(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(Cards)

