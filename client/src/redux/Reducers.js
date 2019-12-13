import { combineReducers } from 'redux'

const testing = (state = "", action) => {
  const {type} = action
  switch(type){
    default: return state
  }
}

const lipstickState = {
  lipsticks : [],
  loading: true
}
export const getLipsticks = (state = lipstickState, action) => {
  const {payload, type} = action
  switch(type){
    case `GET_LIPSTICKS`: 
    return {
      ...state,
      lipsticks : payload,
      loading: false
    }
    default: return state
  }
}
export default combineReducers({
  test: testing,
  lipstickObject: getLipsticks
})

