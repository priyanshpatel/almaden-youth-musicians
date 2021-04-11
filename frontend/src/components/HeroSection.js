import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { Link } from 'react-router-dom';
import InfoSection from './InfoSection';
import {homeObjOne} from './pages/Data';
import cookie from 'react-cookies';

function HeroSection({
    lightBg, topline, lightText, lightTextDesc, headline, decription, buttonLabel, img, alt, imgStart
}) {
    return (
        <div>
            <div className='hero-container'>
                <video src='/videos/video1.mp4' autoPlay loop muted></video>
                <h1 className="hero-header">ALMADEN YOUTH MUSICIANS</h1>
                {cookie.load('name')?<p className="welcome">Welcome {cookie.load('name')}</p>:<p>Share the love through music</p>}
                <div className="hero-btns">
                    <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' link = '/gallery'>PHOTO GALLERY <i class="fas fa-images"></i></Button>
                    <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' link = '/events'>EVENTS</Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection