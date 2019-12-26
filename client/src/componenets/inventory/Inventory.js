import React, { Fragment, useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Loading2 from '../util/Loading2'
import InventoryCard from './InventoryCard'
import { Card, Grid } from '@material-ui/core'
import lightBlue from '@material-ui/core/colors/lightBlue'
const blue = lightBlue[200]

const Inventory = (props) => {
  const {getLipsticks, lipstickObject} = props
  const { lipsticks, loading } = lipstickObject
  useEffect(()=> {
    getLipsticks()
  }, [getLipsticks])
  const [display, setDisplay] = useState(lipsticks)
  const manipulate = (term) => {
    if(term === '') setDisplay(lipsticks)
    term = term.toLowerCase()
   let filter = lipsticks.filter(l => 
      l.name.toLowerCase().includes(term) ||
        l.desc.toLowerCase().includes(term))
        console.log(filter)
    setDisplay(filter)
  }

  
  return (
    loading ? <Loading2/> :
    <Fragment >
      <SearchBar 
      manipulate={manipulate}/>
      <Card style={{background: blue}}>
        <Grid container spacing={2}>
        {display.map((d,i)=> (
          <Grid item xs={6} md={3} key={i}>
            <InventoryCard info={d}/>
          </Grid>
        ))}
        </Grid>
      </Card>

    </Fragment>
  )
}
export default Inventory