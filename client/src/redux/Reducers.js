import { combineReducers } from 'redux'

const testing = (state = "", action) => {
  const {type} = action
  switch(type){
    default: return state
  }
}


export default combineReducers({
  test: testing
})