import Landing from '../componenets/inventory/Inventory'
import { connect } from 'react-redux'
import { getLipsticks } from '../redux/Actions'

const mapStateToProps = state => ({
  lipstickObject: state.lipstickObject
})

const mapDispatchToProps = dispatch => ({
  getLipsticks: () => dispatch(getLipsticks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)