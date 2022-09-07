import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const InfoWidget = () => {
  return (
    <Paper variant='sub-bg' sx={{flexGrow:1,position:'relative'}}>
        <Button sx={{
                position:'absolute', 
                right:5,
                padding:0,
                minHeight: 0,
                minWidth: 0,
                color : 'black'    
            }}>
            <MoreVertOutlinedIcon />
        </Button>
        <Box sx={{
                display:'flex',
                flexWrap:'wrap',
                width : '100%'
            }}>
            <Box sx={{
                display: 'flex',
                flexWrap:'wrap',
                width:'10%',
                justifyContent:'flex-start',
            }}>
                <AccountBalanceWalletOutlinedIcon sx={{color:'red', background:'#ffafaf', borderRadius:'10px',padding:'2px'}} fontSize='large'/>
                <Typography variant='body2' sx={{paddingTop:'1rem'}}>Sales</Typography>
            </Box>
            <Box sx={{marginTop:'1rem', width:'100%'}}>
                <Typography variant='h4'>$4,842</Typography>
                <Box sx={{
                display:'flex',
                alignContent:'center',
                gap:1,
                padding:'0.5rem 0'
          }}>
            <Typography variant='body2' color='#4fc04b'>24.5%</Typography><ArrowUpwardOutlinedIcon color='success' fontSize='small'/>
          </Box>
                
            </Box>
        </Box>
    </Paper>
  )
}

export default InfoWidget