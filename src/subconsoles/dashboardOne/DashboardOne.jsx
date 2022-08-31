import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import TopBrief from './components/TopBrief'

import { topBrief_props as topBrief_data  } from '../../data/dashboard1'
import TotalRevenue from './components/TotalRevenue'
import SalesPrediction from './components/SalesPrediction'
import SalesDifference from './components/SalesDifference'
import VisitSource from './components/VisitSource'
import BrowserStats from './components/BrowserStats'

const DashboardOne = () => {
  return (
    <>
    <Box sx={{
        flexGrow:1,
        width: {sm:'50%', xs:'100%'},
        margin : '0 1rem'
    }}>
        <Grid container spacing={2}>
            {
                topBrief_data.map((item)=>{
                    const {num, title, progress, chart_color, chart_data} = item
                    return (
                        <Grid item  xs={12} sm={6} lg={3}>
                            <TopBrief num={num} title={title} progress={progress} chart_color={chart_color} chart_data = {chart_data}/>
                        </Grid>
                    )
                })
            }
        
            <Grid item xs={12} md={8} >
                <TotalRevenue/>
            </Grid>

            <Grid item xs={12} md={4} sx={{display:'flex',flexWrap:'wrap',gap:2}}>
                <SalesPrediction/>
                <SalesDifference/>
            </Grid>
            
            <Grid item xs={12} sm={6}>
                <VisitSource/> 
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box sx={{display:'flex', flexDirection:'column', flex:1,justifyContent: 'center', height:'100%'}}>
                    <BrowserStats/>
                </Box>
            </Grid>
        </Grid>
        
    </Box>
    
    </>
  )
}

export default DashboardOne