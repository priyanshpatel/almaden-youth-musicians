import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import {homeObjOne} from './Data'
import Aboutus from './Aboutus'

function Home () {
    return (
        <div>
            <HeroSection {...homeObjOne}/>
            {/* <Aboutus/> */}
        </div>
    )
}

export default Home;