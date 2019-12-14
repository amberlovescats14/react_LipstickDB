import Form from '../componenets/lipstickComponents/Form'
import { connect } from 'react-redux'
import { addLipstick } from '../redux/Actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  addLipstick: (values) => dispatch(addLipstick(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)