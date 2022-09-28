import React from "react";
import ResponsiveAppBarWithDrawer from "./MainMenu";
import FirstBlock from "./FirstBlock";
import NumberBlock from "./NumberBlock";
import Video from "./Video";
import Contacts from "./Contacts";
import CardSlider from "./CardSlider";
import CTABlock from "./CTABlock";
import PhotoCTABlock from "./PhotoCTABlock";
import EmailSubscription from "./EmailSubscription";

function App() {

  return (
      <>
          <ResponsiveAppBarWithDrawer />
          <div className="first-block" id="home">
          <FirstBlock />
          </div>
          <PhotoCTABlock />
          <div className="slider-block" id="slider">
          <CardSlider />        
          </div>
          <div className="number-block" id="number">
          <NumberBlock />
          </div>
          <div className="video-block" id="video-block">
          <Video />
          </div>
          <div id="cta-block">
          <CTABlock />
          </div>
          <div id="contacts">
          <Contacts />
          </div>
          <div id="subscribe">
          {/* <EmailSubscription /> */}
          </div>
    </>
  );
}

export default App;
