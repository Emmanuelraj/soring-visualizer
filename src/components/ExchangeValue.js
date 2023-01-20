import React, { useContext } from 'react'
import { SortingContext } from '../Context/SortingContext'

export default function ExchangeValue () {
    
  const sortAlgoVal = useContext(SortingContext);
  console.log('e',sortAlgoVal);
  
  return (
   <div>
        
    </div>
  )
}
