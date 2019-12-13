import axios from 'axios'

//! GET ALL
export const getLipsticks = () => async (dispatch) => {
  try {
    const res = await axios.get('/lipsticks')
    console.log(res.data);
    dispatch({
      type: `GET_LIPSTICKS`,
      payload: res.data
    })
  } catch (error) {
    console.error(error.message)
    console.log("GET ERROR");
  }
}

//! POST
export const addLipstick = (values) => async (dispatch, getState) => {
  const { lipstickObject } = getState()
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = axios.post('/lipsticks', values, config)
    dispatch({
      type: `ADD_LIPSTICK`,
      payload: {
        oldArray: lipstickObject.lipsticks,
        newPosts: res.data
      }
    })
  } catch (error) {
    console.error(error.message)
    console.log("POST ERROR");
  }
}