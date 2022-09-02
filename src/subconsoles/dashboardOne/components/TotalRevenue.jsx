import React , {useRef, useEffect, useState} from 'react'

import { Paper, Typography } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { revenue_data as data } from '../../../data/dashboard1'

const TotalRevenue = () => {

    const ref = useRef()
    const [revWidth, setRevWidth] = useState(782)
    const [dimensions, setDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    useEffect(() => {
      window.addEventListener("resize", handleResize, false);
      setRevWidth(dimensions.width)
    }, []);
    
    useEffect(()=>{
      setRevWidth(ref.current.clientWidth)
    },[dimensions])


  return (
    <Paper variant='sub-bg'>

      <Typography variant='h6' sx={{paddingBottom:'1rem', width:'100%'}}>Total Revenue</Typography>
      <div ref={ref} style={{width:'100%', height:'400px'}} >
            <BarChart
            width={revWidth}
            height={400}
            data={data}
            margin={{
                top: 20,
                right : 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid vertical={false}/>
            <XAxis dataKey="name" axisLine={false}/>
            <YAxis axisLine={false}/>
            <Tooltip />
            <Legend iconType={'circle'} layout="horizontal" verticalAlign={`${dimensions.width < 900 ?'bottom' : 'top'}`} align="right" />
            <Bar dataKey="2022" stackId="a" fill="#009efb" barSize={dimensions.width < 900 ? 5 : 20} />
            <Bar dataKey="2021" stackId="a" fill="#23aafe" />
            <Bar dataKey="2020" stackId="a" fill="#68c5ff" />
            </BarChart>
      </div>
    </Paper>
  )
}

export default TotalRevenue