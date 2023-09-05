import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import Groups2Icon from '@mui/icons-material/Groups2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const SideBarMobileView = ({ setMode, mode }) => {

  const ListItemArr = [
    { name: "Home Page", icon: <HomeIcon /> },
    { name: "Friends", icon: <PersonIcon /> },
    { name: "Page", icon: <DescriptionIcon /> },
    { name: "Groups", icon: <Groups2Icon /> },
    { name: "Market Place", icon: <StorefrontIcon /> },
    { name: "Setting", icon: <PowerSettingsNewIcon /> },
    { name: "Profile", icon: <AccountCircleIcon /> },
  ]

  return (
    <>

      <Box  >

        <Box bgcolor={"background.default"} position={'fixed'} sx={{ width : "80%" , zIndex : '1' }} >
          <List>
            {ListItemArr.map((items, index) => (
              <ListItem disablePadding key={index}  >
                <ListItemButton>
                  <>
                    <ListItemIcon >

                      {items.icon}

                    </ListItemIcon>
                    <ListItemText primary={items.name} />
                  </>
                </ListItemButton>
              </ListItem>

            ))}
          </List>

          <List sx={{ pb: 0 , pt : 0 }} >
            <ListItem disablePadding   >
              <ListItemButton>
                  <ListItemIcon >
                    <DarkModeIcon  />
                  </ListItemIcon>
                  <Switch onChange={()=> setMode( mode === "light" ? "dark" : "light")} />    
              </ListItemButton>
            </ListItem>
          </List>
        </Box>


      </Box>
    </>

  )
}

export default SideBarMobileView