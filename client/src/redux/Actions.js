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
    const res = await axios.post('/lipsticks', values, config)
    console.log('RES:',  res.data)
    dispatch({
      type: `ADD_LIPSTICK`,
      payload: {
        oldArray: lipstickObject.lipsticks,
        newLipstick: res.data
      }
    })
  } catch (error) {
    console.error(error.message)
    console.log("POST ERROR");
  }
}


//! UPDATE 
export const updateLipstick = (id, values) => async (dispatch, getState) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.put(`/lipsticks/${id}`, values, config)

    dispatch({
      type: `UPDATE_LIPSTICK`,
      payload: {
        id,
        lipsticks: res.data
      }
    })
  } catch (error) {
    console.error(error.message)
    console.log(`EDIT ERROR`)
  }

}

//! DELETE
export const deleteLipstick = (id) => async (dispatch, getState) => {
  const {lipstickObject} = getState()
  console.log(lipstickObject.lipsticks)
  try {
    await axios.delete(`/lipsticks/${id}`)
    dispatch({
      type: `DELETE_LIPSTICK`,
      payload: {
        id,
        oldArr: lipstickObject.lipsticks
      }
    })
  } catch (error) {
    console.error(error.message)
    console.log('DELETE ERROR')
  }

}