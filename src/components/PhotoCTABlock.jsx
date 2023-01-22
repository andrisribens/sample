import React from 'react';
import Grid from '@mui/material/Grid';

import background from '../images/rob-mobile.jpg';

function PhotoCTABlock() {
  return (
    <div
      className="photo-cta-block"
      style={{
        backgroundImage: 'url(' + background + ')',
      }}
    >
      <div className="photo-cta-block-content">
        <Grid container>
          <Grid item md={6}></Grid>
          <Grid item xs={12} md={6} paddingLeft={2}>
            <h4>
              <span className="photo-txt">
                {' '}
                Let us help You create seamless digital experience for Your
                customers
              </span>
            </h4>
            <div>
              <button className="btn-first-cta">
                <span className="btn-first-cta-text">Contact me</span>
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PhotoCTABlock;
