import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { Link } from 'react-router-dom';
import InfoSection from './InfoSection';
import {homeObjOne} from './pages/Data';

function HeroSection({
    lightBg, topline, lightText, lightTextDesc, headline, decription, buttonLabel, img, alt, imgStart
}) {
    return (
        <div>
            <div className='hero-container'>
                <video src='/videos/video1.mp4' autoPlay loop muted></video>
                <h1 className="hero-header">ALMADEN YOUTH MUSICIANS</h1>
                <p>Share the love through music</p>
                <div className="hero-btns">
                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' link = '/signin'>SIGN IN <i class="fas fa-sign-in-alt" /></Button>
                    <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' link = '/aboutus'>ABOUT US</Button>
                </div>
            </div>
            {/* <InfoSection {...homeObjOne}/> */}
        </div>
    )
}

export default HeroSection