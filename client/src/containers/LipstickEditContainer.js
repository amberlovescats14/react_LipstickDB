import LipstickEdit from '../componenets/lipstickComponents/LipstickEdit'
import { connect } from 'react-redux'
import {updateLipstick} from '../redux/Actions'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  updateLipstick: (id, values) => dispatch(updateLipstick(id, values))
})

export default connect(mapStateToProps, mapDispatchToProps)(LipstickEdit)