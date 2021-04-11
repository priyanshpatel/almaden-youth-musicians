import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import {homeObjOne} from './Data'
// import Aboutus from './Aboutus'
import Footer from '../Footer'

function Home () {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            {/* <Aboutus/> */}
            <Footer />
        </div>
    )
}

export default Home;