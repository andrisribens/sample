import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ListItemIcon from '@mui/material/ListItemIcon';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import HomeIcon from '@mui/icons-material/Home';
import Fab from '@mui/material/Fab';
import CancelIcon from '@mui/icons-material/Cancel';
import EmailIcon from '@mui/icons-material/Email';


const menuLinks = [
  {text:'Slider', icon: <ViewCarouselIcon></ViewCarouselIcon>, link: "#slider"},
  {text:'Video', icon: <OndemandVideoIcon></OndemandVideoIcon>, link: "#video-block"}, 
  {text: "CTA block", icon: <CheckBoxIcon></CheckBoxIcon>, link: "#cta-block"}, 
  {text: "Contacts", icon: <PhoneAndroidIcon></PhoneAndroidIcon>, link: "#contacts"},
  {text: "Subscribe", icon: <EmailIcon></EmailIcon>, link: "#subscribe"}
];

function ResponsiveAppBarWithDrawer(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerLeft = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Typography variant="h4" sx={{ my: 2, pl: "20%" }}>
        Mobile menu
      </Typography>
      <Divider />
      <List>
            <ListItem key="#home"
            // disablePadding
            >
            <ListItemButton sx={{ textAlign: 'left', paddingLeft: "20%" }}
            href="#home" >
                <ListItemIcon sx={{ color: "#EF5B0C" }}>
                  <HomeIcon></HomeIcon>
                </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>

        {menuLinks.map((menuLink) => (
          <ListItem key={menuLink.text} 
          // disablePadding
          >
            <ListItemButton sx={{ textAlign: 'left', paddingLeft: "20%" }}>
              <ListItemIcon sx={{ color: "#EF5B0C" }}>
                    {menuLink.icon}
                </ListItemIcon>
              <ListItemText primary={menuLink.text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const [mobileBottomOpen, setMobileBottomOpen] = useState(false);

  const handleBottomDrawerToggle = () => {
    setMobileBottomOpen(!mobileBottomOpen);
  };

  const drawerBottom = (
    <Box onClick={handleBottomDrawerToggle} sx={{ textAlign: 'left' }}>
         
      <List>
          <ListItem key="#home">
              <ListItemButton sx={{ textAlign: 'left', paddingLeft: "20%" }}
              href="#home" >
                <ListItemIcon sx={{ color: "#EF5B0C" }}>
                    <HomeIcon></HomeIcon>
                </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>

          <Divider />

        {menuLinks.map((menuLink) => (
          <ListItem key={menuLink.text} 
          // disablePadding
          >
            <ListItemButton 
            sx={{ textAlign: 'left', paddingLeft: "20%" }}
            href={menuLink.link}
            >
              <ListItemIcon size="large" sx={{ color: "#EF5B0C" }}>
                    {menuLink.icon}
                </ListItemIcon>
              <ListItemText primary={menuLink.text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  return (
    
    <>
      <AppBar>
      <Container maxWidth="xl" className="menu-bar">
      {/* //This is Desktop menu */}
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/sample-responsive-webpage"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Desktop LOGO
          </Typography>
          
          {/* This is mobile top menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
              size="large"
              aria-label="hamburger menu"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/sample-responsive-webpage"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mobile LOGO
          </Typography>

    
          {/* This part is for desktop menu */}
          <Box sx={{ justifyContent: "flex-end", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuLinks.map((menuLink) => (
              <Button
                key={menuLink.text}
                sx={{mr: 3, my: 2, color: 'white', display: 'block' }}
                href={menuLink.link}
              >
                {menuLink.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   <Toolbar />


   {/* This part is for floating action button */}
        <AppBar sx={{
              position: "fixed",
              display: { xs: 'flex', md: 'none' },
              top: "auto",
              bottom: 0,
        }}>

            <Fab 
              size="large" 
              sx={{ 
                bgcolor: "#143F6B",
                color: "#ffffff",
                flexGrow: 1, 
                position: "absolute",
                bottom: 30,
                right: 40 }} 
            >
                <IconButton
                  size="large"
                  aria-label="hamburger menu"
                  onClick={handleBottomDrawerToggle}
                  color="inherit"
                >
                <MenuIcon />
              </IconButton>
            </Fab>
    </AppBar>

{/* This is for left drawer */}
   <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', 
            width: "80%" },
          }}
        >
          {drawerLeft}
        </Drawer>
      </Box>

{/* This is for bottom drawer */}

      <Box component="nav" sx={{position: "relative"}}>
        <Drawer
          anchor='bottom'
          container={container}
          variant="temporary"
          open={mobileBottomOpen}
          onClose={handleBottomDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', 
            width: "100%",
            height: "auto",
            overflow: "visible" },
          }}
        >
          <IconButton
                  aria-label="close menu"
                  onClick={handleBottomDrawerToggle}
                  sx={{ 
                  color: "#143F6B",
                  bgcolor: "white",
                  flexGrow: 1, 
                  position: "absolute",
                  top: -25,
                  right: 40,
                  padding: 0,
                  fontSize: 52
                   }} 
                >
                  <CancelIcon
                    fontSize="inherit"
                   />
          </IconButton>
          {drawerBottom}
        </Drawer>
      </Box>

    </>
  );
}

export default ResponsiveAppBarWithDrawer;