import React from "react";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

import Map from "./Map";


function Contacts() {
    return (
       <div className="contacts-block">
       <div className="contacts-block-content">
       <Grid container >
            <Grid item xs={12} mt={3} mb={3}>
                <h3>Where to find us</h3>
            </Grid>
            <Grid item xs={12} sm={6}>
             <Map />
            </Grid>
            <Grid item xs={12} sm={6} className="phoneEmail">
                <List component="div" >
                    <ListItem >
                        <ListItemIcon>
                            <PlaceIcon className="contactIcon" ></PlaceIcon>
                        </ListItemIcon>
                        <ListItemText >
                            <h5>MyStreet 14-24, Rīga, Latvia</h5>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon className="contactIcon"></EmailIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <h5>name.lastname@gmail.com</h5>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneAndroidIcon className="contactIcon"></PhoneAndroidIcon>
                        </ListItemIcon>
                        <ListItemText>
                        <h5>+371 265 37 xxx</h5>
                        </ListItemText>
                    </ListItem>
                </List>
            </Grid>  
        </Grid>
        </div>
        </div>
    );
}

export default Contacts;