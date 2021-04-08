import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video1.mp4' autoPlay loop muted></video>
            <h1 className="hero-header">ALMADEN YOUTH MUSICIANS</h1>
            <p>Share the love through music</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>SIGN IN <i class="fas fa-sign-in-alt" /></Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>ABOUT US</Button>
            </div>
        </div>
    )
}

export default HeroSection