import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PublicIcon from '@mui/icons-material/Public';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 270,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserName = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: '10px',
}))


const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip title="Add Post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px )", md: 30 } }} >
        <Fab color='primary' aria-label='add' >
          <AddIcon onClick={() => setOpen(true)} />
        </Fab>
      </Tooltip>

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}  bgcolor={'background.default'} color={'text.primary'}   >
          <Typography id="modal-modal-title" variant="h6" component="h2" color={'gray'} textAlign={'center'} >
            Create post
          </Typography>

          <UserName  >
            <Avatar sx={{ width: 32, height: 32, border: "2px solid gray" }} alt="Travis Howard" src="https://www.shutterstock.com/shutterstock/photos/2164838607/display_1500/stock-vector-happy-cute-kid-girl-childhood-hand-drawn-cartoon-character-illustration-2164838607.jpg" />
            <Typography variant='h6' component={'p'} fontWeight={'400'} >Aarti</Typography>
          </UserName>
          <TextField
            sx={{ width: "100%", mt: 2 }}
            rows={3}
            multiline
            variant="standard"
            placeholder="Whats in your mind"
            focused
          />

          <Stack
            direction="row"
            spacing={2}
            mt={2} mb={3}
          >
            <EmojiEmotionsIcon color='warning' />
            <ImageIcon color='primary' />
            <VideoCameraBackIcon color='error' />
            <PersonAddIcon color='secondary' />
          </Stack>

          <ButtonGroup fullWidth variant="outlined" aria-label="outlined button group">
            <Button>Post</Button>
            <Button sx={{ width : "100px"}} ><PublicIcon color='disabled' /> </Button>
         
          </ButtonGroup>
       
        </Box>
      </Modal>
    </>
  )
}

export default Add