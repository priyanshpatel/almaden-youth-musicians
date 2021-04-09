import React from 'react'
import { Button } from './Button'
import './InfoSection.css'
import '../App.css'
import { Link } from 'react-router-dom';

{/* <div className="home__hero-section">
                <div className="container">
                    <div className="row home__hero-row" 
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className = "top-line">{topline}</div>
                                <h1 className='heading'>{headline}</h1>
                                <p className="home__hero-subtitle">{decription}</p>
                                <Link to="/test">
                                    <Button>{buttonLabel}</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <img src={img} alt={alt} className="home__hero-img"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>test</h1>
            </div> */}

function InfoSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
}) {
    return (
        <>
            <div
                className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
            >
                <div className='container container--info'>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                {/* <Link to='/sign-up'> */}
                                    <Button className="btns" buttonStyle='btn--purple' buttonSize='btn--large' link="contactus">
                                        {/* <Button buttonSize='btn--wide' buttonColor='blue'> */}
                                        {buttonLabel}
                                    </Button>
                                {/* </Link> */}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img img-info' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoSection;