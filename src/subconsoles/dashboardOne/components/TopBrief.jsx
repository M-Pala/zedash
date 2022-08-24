import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import {
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

import { topBrief_data as data } from '../../../data/dashboard1';

const TopBrief = ({num, title, progress, chart_color, chart_data}) => {
  return (
    <Paper variant='sub-bg'>
        <Box sx={{
            display:'flex',
            flexWrap : 'wrap',
            gap:1,
            width: '30%'
        }}>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                gap:1,
            }}>
                <Typography variant='h4'>{num}</Typography>{progress ?<ArrowDropUpIcon color='success' fontSize='large'/> : <ArrowDropDownIcon color='error' fontSize='large'/>}
            </Box>
            <Typography variant='caption'>{title}</Typography>
        </Box>
        
        <BarChart
          width={120}
          height={70}
          data={chart_data}
          margin={{
            left: 50,
            right: 0,
          }}
        >
            <Tooltip />
            <Bar dataKey="hits" fill={chart_color} barSize={3}/>
        </BarChart>
    </Paper>
  )
}

export default TopBrief