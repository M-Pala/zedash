import { Box,  Paper, Typography } from '@mui/material'
import React from 'react'
import BrowserShare from './BrowserShare';

import { brouserStats_data as data } from '../../../data/dashboard1';


const BrowserStats = () => {
    
  return (
    <Paper variant='sub-bg' sx={{ display:'flex',flex:1}}>
        <Typography variant='h6' sx={{ width:'100%'}}>Browser Stats</Typography>
        <Box sx={
          {
            width:'100%',
            overflow:'hidden',
            overflowY: 'scroll',
            height:'420px',
            display:'flex',
            flexDirection:'column',
            marginTop:'1rem',
            '&::-webkit-scrollbar': { width: 0, }
            // '& ::-webkit-scrollbar': {
            //   width: '12rem'
            // },
            // '& ::-webkit-scrollbar-track': {
            //   boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            //   webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            // },
            // '& ::-webkit-scrollbar-thumb': {
            //   backgroundColor: 'rgba(0,0,0,.1)',
            //   outline: '1px solid slategrey'
            // }
          }
        }>
          {
            data.map((item)=>{
              const {browser, img, share, bg, color} = item
              return <BrowserShare browser = {browser} img = {img} share = {share} bgc = {bg} color = {color}/>
            })
          }
        </Box>
    </Paper>
  )
}

export default BrowserStats

// {width:'100%', paddingTop:'2rem', mb: 2,
//           display: "flex",
//           flexDirection: "column",
//           height: '100%',
//           overflow: "hidden",
//           overflowY: "scroll",}