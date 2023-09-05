import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

import './feed.css'

const itemData = [
  { title: "", img: "https://i.ytimg.com/vi/EbvMjx462q4/maxresdefault.jpg" },
  { title: "", img: "https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fHww&w=1000&q=80" },
  { title: "", img: "https://m.media-amazon.com/images/I/81ZKNL90RCL._AC_UF894,1000_QL80_.jpg" },
  { title: "", img: "https://i.ytimg.com/vi/dYn8_RAipfU/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDaoIAuKhE0Mz1mhTD_rrCelZn7Cg" },
  { title: "", img: "https://i.pinimg.com/736x/88/c5/a6/88c5a652a0573f1c51aec4c7fcbb5b54.jpg" },
  { title: "", img: "https://i.ytimg.com/vi/OQod9kQy2UI/maxresdefault.jpg" },
  { title: "", img: "https://i.pinimg.com/736x/66/1b/26/661b2642933b01bfea76657afd7a4846.jpg" },
  { title: "", img: "https://feelingnifty.com/wp-content/uploads/2022/06/mountain-painting-beginner-easy-1536x2048.jpg-e1654528722981-735x741.webp" },
  { title: "", img: "https://i.pinimg.com/originals/53/af/35/53af35e8b30266756b03228e4b6cf993.jpg" }
]

const Right = () => {
  return (
    <Box
      flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }} >

      <Box width={360} position={'fixed'}   >

        <Box  className="RIghtbar-scroll" >

          <Typography variant='h6' fontWeight="100"> Online Friends</Typography>
          <AvatarGroup total={24} max={7} >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Jrevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Orevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Prevor Henderson" src="/static/images/avatar/5.jpg" />
            <Avatar alt="Srevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>

          {/* Image Grid section */}
          <Typography variant='h6' fontWeight="100"> Latest Post </Typography>
          <ImageList cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>

          {/* converstaion div */}
          <Typography variant='h6' fontWeight="100"> Latest Conversation </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>

        </Box>

      </Box>

    </Box>
  )
}

export default Right