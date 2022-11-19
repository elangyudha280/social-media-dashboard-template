
import {useState,useEffect} from 'react'

// import component Navbar
import Navbar from './component/navbar.jsx'

// import component bg pattern
import BgPattern from './component/bgPattern.jsx'

// import component social media container
import SocialMediaContainer  from './component/socialMediaContainer.jsx';

// import component container overview
import ContainerOverview from './component/containerOverview.jsx'


function App() {
  return (
      <>
      {/* component navbar */}
       <Navbar/>  
       {/* component bg pattern */}
       <BgPattern/>
       {/* component social media container */}
       <SocialMediaContainer/>
       {/* component container overview */}
       <ContainerOverview/>
      </>
  );
}

export default App;
