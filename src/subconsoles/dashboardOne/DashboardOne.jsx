import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import TopBrief from './components/TopBrief'

import { topBrief_props as topBrief_data  } from '../../data/dashboard1'
import TotalRevenue from './components/TotalRevenue'
import SalesPrediction from './components/SalesPrediction'

const DashboardOne = () => {
  return (
    <>
    <Box sx={{
        flexGrow:1,
        width: '50%',
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

            <Grid item xs={12} md={4}>
                <SalesPrediction/>
            </Grid>
        </Grid>
        
    </Box>
    
    </>
  )
}

export default DashboardOne