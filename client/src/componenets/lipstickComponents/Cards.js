import React, {useEffect} from 'react'
import { Paper, Card, CardContent, CardActions, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'


const watermelon = red[600]
const pinkish = deepOrange[50]
const maroon = pink[900]

const useStyles = makeStyles(theme => ({ 
  root: {
    margin: theme.spacing(2),
    width: 325,
    height: 100,
    background: pinkish
  },
  span: {
    color: watermelon
  },
  desc: {
    color: maroon
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
          <Card className={classes.root}
          key={i} id={l.id}> 
            <CardContent>
              <Typography variant='h5'>
              <span className={classes.span}>{l.brand}: </span> 
              {l.color}
              </Typography>
            </CardContent>
            <CardContent className={classes.desc}>
            <Typography variant="subtitle1">
            {l.desc}
            </Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
