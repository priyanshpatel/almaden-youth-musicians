import React from 'react'
import { Button } from '../Button'
import '../HeroSection.css'
import '../../App.css'
import { Link } from 'react-router-dom';
import InfoSection from '../InfoSection';
import {homeObjOne} from './Data';

function Aboutus({
    lightBg, topline, lightText, lightTextDesc, headline, decription, buttonLabel, img, alt, imgStart
}) {
    return (
        <div id="aboutus">
            <InfoSection {...homeObjOne}/>
        </div>
    )
}

export default Aboutus