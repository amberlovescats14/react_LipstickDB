import React, {useEffect} from 'react'
import OneCard from './OneCard'
import Loading from '../util/Loading'

export default function Cards(props) {
  const { getLipsticks, lipstickObject} = props
  const { lipsticks, loading } = lipstickObject
  useEffect(()=> {
    getLipsticks()
  }, [getLipsticks])

  return (
      loading ? <Loading/> :
      lipsticks.reverse().map((l,i)=> (
        <OneCard l={l} i={i} key={i} lipsticks={lipsticks}/>
      ))
   
  )
}
