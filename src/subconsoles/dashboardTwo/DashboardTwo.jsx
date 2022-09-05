import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import IntroCard from './components/IntroCard'
import NewVisitorsActivity from './components/NewVisitorsActivity'

const DashboardTwo = () => {
  return (
    <Box sx={{
        flexGrow:1,
        width: {sm:'50%', xs:'100%'},
        margin :{xs:'0', sm : '0 1rem'},
    }}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <IntroCard/>
            </Grid>
            <Grid item xs={12} md={4} sx={{display:'flex',flexWrap:'wrap',gap:2}}>
                <NewVisitorsActivity/>
            </Grid>
            <Grid item xs={12} md={4} sx={{display:'flex',flexWrap:'wrap',gap:2}}>
                <NewVisitorsActivity dashType = 'line'/>
            </Grid>
            
        </Grid>
    </Box>
  )
}

export default DashboardTwo