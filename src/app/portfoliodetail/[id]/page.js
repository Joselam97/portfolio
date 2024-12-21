'use client'
import React from 'react'
import PortfolioDetailDesign from '../../page/portfolio-detail-design'
import { DataArray } from '../../data'


const Portfolio =(props)=>{
  console.log("id: ", props?.params.id)

  return(
    <React.Fragment>
      <PortfolioDetailDesign
      data={DataArray[props?.params.id]}
      id={props?.params.id}
      DataArray={DataArray}
      />
    </React.Fragment>
  )
}
export default Portfolio