import { Box, Typography } from '@mui/material'

import React from 'react'

const BrowserShare = ({browser, img, share, bgc, color}) => {
  return (
    <Box sx={{
        display : 'flex',
        justifyContent:'space-between',
        padding: '1.5rem 0.5rem',
        width: '100%'
    }}>
        <Box sx={{width:'40%', display:'flex', alignItems:'center',gap:2}}>
            <img style={{width:'3rem', height:'3rem'}} src={img} alt='graph'/>
            <Typography>{browser}</Typography>
        </Box>
        <Box sx={{display:'flex', alignItems:'center',gap:2}}>
            <Typography variant='body1' sx={{
                width:'3rem',
                textAlign:'center',
                borderRadius:'5px',
                backgroundColor:bgc, 
                color:color,
            }}>
            {share}
            </Typography>
        </Box>
    </Box>
  )
}

export default BrowserShare