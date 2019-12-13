import React, {useEffect} from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange'
const pinkish = deepOrange[50]

const useStyles = makeStyles(theme => ({ 
  root: {
    margin: theme.spacing(2),
    width: 325,
    height: 100,
    background: pinkish
  }
}))

export default function Cards(props) {
  const { getLipsticks, lipstickObject} = props
  const { lipsticks, loading } = lipstickObject
  useEffect(()=> {
    getLipsticks()
  }, [])
  const classes = useStyles();
  console.log(lipsticks)
  return (
    <div>
      {lipsticks.map((l,i)=> {

      return  (
          <Paper className={classes.root}
          key={i} id={l.id}> 
            hi
          </Paper>
        )
      })}
    </div>
  )
}
