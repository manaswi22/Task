import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import HabotSection from './components/Habot'
import VideoSection from './components/Videosection'
import GetVerifiedSection from './components/Getverified'
import Sections from './components/Sections'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <HabotSection/>
      <VideoSection/>
      <GetVerifiedSection/>
      <Sections/>
      <Footer/>
    </div>
  )
}

export default App
