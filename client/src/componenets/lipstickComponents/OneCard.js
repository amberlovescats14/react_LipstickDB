import React, {Fragment} from 'react'
import { Card, CardContent, Typography} from '@material-ui/core'
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

const OneCard = (props) => {
  const {l, i} = props
  const classes = useStyles();
  console.log(l)
  return (
    <Fragment>
          <Card className={classes.root}
          key={i} id={l.id}> 
            <CardContent>
              <Typography variant='h5'>
              <span className={classes.span}>{l.brand}: </span> 
              {l.name.toUpperCase()}
              </Typography>
            </CardContent>
            <CardContent className={classes.desc}>
            <Typography variant="subtitle1">
            {l.desc}
            </Typography>
            </CardContent>
          </Card>
    </Fragment>
  )
}
export default OneCard
