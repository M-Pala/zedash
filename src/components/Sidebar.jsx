import React, { useState } from 'react'
import { Button, Divider, List, Paper, styled, Typography } from '@mui/material'
import { Box } from '@mui/system';

import { sidebar_menu_items } from '../data/sidebar';
import SidebarListItem from './SidebarListItem';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar, openSidebar } from '../features/sidebar/sidebarSlice';

const SidebarPaper = styled(Paper)(({theme})=>({
    maxWidth: '18rem',
    height: '97%',
    position: 'fixed',
    textAlign: 'center'
}))

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const sidebarState = useSelector((state)=> state.sidebar.open)
    const dispatch = useDispatch()

    function handleSidebar(){
        if (sidebarState){
            dispatch(closeSidebar())
        }
        else{
            dispatch(openSidebar())
        }
    }
    return (
        <>
    <Box sx={{
            width: sidebarState ? '15rem' : '4rem',
            // height: '10rem',
            position: 'relative', 
            zIndex:999
    }}>
    <SidebarPaper sx={{
        width: sidebarState ? '15rem' : '4rem',
        height: sidebarState ? '100%' : '8rem',
    }}>

        
        <Box>
            <Typography 
            sx={{
                padding:'1rem', 
                textAlign: 'center'
            }} 
            variant='h4'>
                {sidebarState ? 'MDashboards' : 'M' }
            </Typography>
            
        </Box>
                
        <Divider/>
        {
            sidebarState &&
        
            <List>
                {
                    sidebar_menu_items.map((item)=>{
                        return <SidebarListItem linkLocation={item.linkLocation} linkName={item.linkName} linkIcon={<item.linkIcon/>} sidebarOpen = {sidebarState}/>
                    })
                }
            </List>
        }
        {/* <Button sx={{position : 'absolute', right: '0', bottom: '0'}} onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? <MenuOpenIcon/>: <MenuIcon/>}</Button>  */}
        <Button sx={{position : 'absolute', right: '0', bottom: '0'}} onClick={handleSidebar}>{sidebarState ? <MenuOpenIcon/>: <MenuIcon/>}</Button> 
    </SidebarPaper>
    </Box>
    </>
  )
}
    

export default Sidebar