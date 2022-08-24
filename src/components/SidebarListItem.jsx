import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SidebarListItem = ({linkLocation, linkName, linkIcon, sidebarOpen}) => {
  return (
    <Link to={linkLocation}>
        <ListItem disablePadding  sx={{
            textAlign:"center",
            height : '3rem'
        }}>
            <ListItemButton>
                <ListItemIcon>{linkIcon}</ListItemIcon>
                {sidebarOpen ? <ListItemText primary={linkName}/> : null}
            </ListItemButton>
        </ListItem>
    </Link>
  )
}

export default SidebarListItem