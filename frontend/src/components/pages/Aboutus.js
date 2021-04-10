import React from 'react'
import { Button } from '../Button'
import '../HeroSection.css'
import '../../App.css'
import { Link } from 'react-router-dom';
import InfoSection from '../InfoSection';
import {homeObjOne} from './Data';
import Footer from '../Footer';

function Aboutus({
    lightBg, topline, lightText, lightTextDesc, headline, decription, buttonLabel, img, alt, imgStart
}) {
    return (
        <div id="aboutus">
            <InfoSection {...homeObjOne}/>
            <Footer />
        </div>
    )
}

export default Aboutus