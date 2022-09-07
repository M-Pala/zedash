import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const IntroCard = () => {
  return (
    <Paper variant='sub-bg' sx={{}}>
        <Box sx={{
                display:'flex',
                flexWrap:'wrap',
                width : '70%'
            }}>
            <Box>
                <Typography variant='body1'>Congratulations Madhav!</Typography>
                <Typography variant='caption'>Best Seller of the month</Typography>
            </Box>
            <Box sx={{marginTop:'1rem', width:'100%'}}>
                <Typography variant='h5' sx={{color:'#0066ee'}}>$24.5k</Typography>
                <Typography variant='caption'>82% of the target</Typography>
                <Button sx={{border: 'none',
                            display: 'block',
                            backgroundColor: '#0066ee',
                            marginTop:'1rem',
                            padding : '.2rem 1.2rem',
                            color: 'white',
                            textTransform: 'none',
                            boxShadow:'0px 2px 10px 5px  #0066ff21' ,
                            '&:hover': {
                                backgroundColor: '#0066ff'
                            }}}>
                                View Sales
                            </Button>
            </Box>
        </Box>
        <Box sx={{display:'flex', alignItems:'flex-end' }}>
            <img style={{width:'6rem', height:'6rem'}} src='https://cdn-icons-png.flaticon.com/512/346/346023.png' />
        </Box>
    </Paper>
  )
}

export default IntroCard