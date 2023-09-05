import React, { useState } from 'react'
import SideBar from './componentsSecond/SideBar'
import Feed from './componentsSecond/Feed'
import Right from './componentsSecond/Right'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import NavbarTwo from './componentsSecond/NavbarTwo'
import Add from './componentsSecond/Add'
import SideBarMobileView from './componentsSecond/SideBarMobileView'

const AppTwo = () => {
    const [mode, setMode] = useState('dark');
    const [ MobileSec , setMobileSec ] = useState(false)

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })

    return (
        <>
            <ThemeProvider theme={darkTheme} >
                <Box bgcolor={'background.default'} color={'text.primary'} >
                    <NavbarTwo setMode={setMode} mode={mode} />
                    <Stack spacing={2} direction={"row"} justifyContent={"space-between"}  >
                        <SideBar setMode={setMode} mode={mode} />
                        <Feed />
                        <Right />
                    </Stack>
                    <Add />
                </Box>
             
            </ThemeProvider>
        </>
    )
}

export default AppTwo