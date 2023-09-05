
import { AppBar, Avatar, Box, Badge, Toolbar, Typography, styled, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { InputBase } from '@mui/material';
import SideBarMobileView from './SideBarMobileView';

// icons 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';



const ToolBarStyled = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  display: "flex"
}))

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: " 0.2rem 1rem",
  borderRadius: "4px",
  width: "40%"
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

const UserName = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    display: 'flex'
  }
}))

const NavbarTwo = ({ setMode, mode }) => {
  const [open, setOpen] = useState(false);
  const [openSIdeBar, setSIdebarOpen] = useState(false)
  return (
    <>
      <AppBar position='sticky' >
        <ToolBarStyled >

          <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }} >Navbar </Typography>
          <AcUnitIcon sx={{ display: { xs: "block", sm: "none" } }} fontSize='large' onClick={() => setSIdebarOpen(!openSIdeBar)} />

          <Search >
            <InputBase placeholder='Search....' />
          </Search>

          <IconsContainer >
            <Badge badgeContent={4} color="error">
              <MailIcon color="inherit" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsActiveIcon color="inherit" />
            </Badge>
            <Avatar sx={{ width: 24, height: 24 }} onClick={() => setOpen(true)}
              alt="Travis Howard" src="https://www.shutterstock.com/shutterstock/photos/2164838607/display_1500/stock-vector-happy-cute-kid-girl-childhood-hand-drawn-cartoon-character-illustration-2164838607.jpg" />


          </IconsContainer >
          {/*  for mobile view */}
          <UserName onClick={() => setOpen(true)} >
            <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="https://www.shutterstock.com/shutterstock/photos/2164838607/display_1500/stock-vector-happy-cute-kid-girl-childhood-hand-drawn-cartoon-character-illustration-2164838607.jpg" />
            <Typography variant='h6' component={'p'} >Aarti</Typography>
          </UserName>

        </ToolBarStyled>

        <div>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            // anchorEl={anchorEl}
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
        </div>
      </AppBar>
      {
        openSIdeBar == true &&
        <SideBarMobileView setMode={setMode} mode={mode} />
      }
    </>
  )
}

export default NavbarTwo