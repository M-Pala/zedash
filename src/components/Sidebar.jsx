import React, { useState } from 'react'
import { Button, Divider, List, Paper, styled, Typography } from '@mui/material'
import { Box } from '@mui/system';

import { sidebar_menu_items } from '../data/sidebar';
import SidebarListItem from './SidebarListItem';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';

const SidebarPaper = styled(Paper)(({theme})=>({
    maxWidth: '18rem',
    height: '97%',
    position: 'fixed',
    textAlign: 'center'
}))

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
    <Box sx={{
            width: sidebarOpen ? '15rem' : '4rem',
            // height: '10rem',
            position: 'relative', 
            zIndex:999
    }}>
    <SidebarPaper sx={{
        width: sidebarOpen ? '15rem' : '4rem',
        height: sidebarOpen ? '100%' : '8rem',
    }}>

        
        <Box>
            <Typography 
            sx={{
                padding:'1rem', 
                textAlign: 'center'
            }} 
            variant='h4'>
                {sidebarOpen ? 'MDashboards' : 'M' }
            </Typography>
            
        </Box>
                
        <Divider/>
        {
            sidebarOpen &&
        
            <List>
                {
                    sidebar_menu_items.map((item)=>{
                        return <SidebarListItem linkLocation={item.linkLocation} linkName={item.linkName} linkIcon={<item.linkIcon/>} sidebarOpen = {sidebarOpen}/>
                    })
                }
            </List>
        }
        <Button sx={{position : 'absolute', right: '0', bottom: '0'}} onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? <MenuOpenIcon/>: <MenuIcon/>}</Button> 
    </SidebarPaper>
    </Box>
    </>
  )
}
    

export default Sidebar