import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import background from "../images/rob-mobile.jpg"


function PhotoCTABlock() {


    return (
        <div 
        className="photo-cta-block"
        style={{
          backgroundImage: "url(" + background + ")"
        }}
        >
          <div className="photo-cta-block-content">
          <Grid container>
          <Grid item md={6}></Grid>
          <Grid item xs={12} md={6} paddingLeft={2}>
            <h4><span> Let us help You create seamless digital experience for Your customers</span></h4>
            <div>
            <Button variant="outlined" size="large" color="inherit" href="#cta-block" sx={{marginTop:"20px"}}
            >Contact me</Button>
            </div>
            {/* <p>We are waiting for your call</p> */}
            </Grid>
            </Grid>
          </div>
        </div>

    );
}

export default PhotoCTABlock;


