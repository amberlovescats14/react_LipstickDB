import React from 'react'
import {Grid }from '@material-ui/core'
import CardContainer from '../containers/CardContainer'
import Form from './lipstickComponents/Form'



export default function Lipsticks(props) {

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Form/>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContainer/>
        </Grid>
      </Grid>
    </div>
  )
}
