import React from 'react'
import {Card, CardHeader, CardContent, Avatar, IconButton, Typography } from '@material-ui/core'
import {red, deepOrange} from '@material-ui/core/colors'
import lightBlue from '@material-ui/core/colors/lightBlue'
const blue = lightBlue[200]
const watermelon = red[600]
const pinkish = deepOrange[50]




const InventoryCard = (props) => {
  const { info } = props
  const chooseColor = () => {
    switch(info.brand.toLowerCase()){
      case 'clinique': return watermelon
      default: return blue
    }
  }

  return (
    <Card style={{background: pinkish}}>
      <CardHeader
        
        avatar={
          <Avatar aria-label="recipe" style={{background: chooseColor()}}>
            {info.brand.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           {info.full ? 'F' : 'M'}
          </IconButton>
        }
        title={info.brand}
        subheader={info.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {info.desc}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InventoryCard
