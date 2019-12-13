import React, {useEffect} from 'react'
import {Grid, Paper }from '@material-ui/core'
import Cards from './lipstickComponents/Cards'
import Form from './lipstickComponents/Form'
import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange'
const pinkish = deepOrange[50]

const useStyles = makeStyles({
  root: {
    background: pinkish,
    height: '100vh'
  }
})

export default function Lipsticks(props) {
  const { getLipsticks, lipstickObject} = props
  const { lipsticks, loading } = lipstickObject
  const classes = useStyles();

  useEffect(()=> {
    getLipsticks()
  }, [])
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Form/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Cards/>
        </Grid>
      </Grid>
    </div>
  )
}
