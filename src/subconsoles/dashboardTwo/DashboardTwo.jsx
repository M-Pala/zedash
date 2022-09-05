import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const DashboardTwo = () => {
  return (
    <Box sx={{
        flexGrow:1,
        width: {sm:'50%', xs:'100%'},
        margin :{xs:'0', sm : '0 1rem'},
    }}>
        <Paper variant='sub-bg'>
            <Typography variant='h2'>Chart JS console Coming soon...</Typography>
        </Paper>
    </Box>
  )
}

export default DashboardTwo