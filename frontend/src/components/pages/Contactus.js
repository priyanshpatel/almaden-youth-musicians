import React from 'react'
import { Button } from '../Button'
// import '../HeroSection.css'
import '../../App.css'
import { Link } from 'react-router-dom';
// import InfoSection from '../InfoSection';
// import {homeObjOne} from './Data';
// import Events from '../Events';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

function Contactus() {
    return (
        <div id="contactus">
            <ContactUs/>
            <Footer />
        </div>
    )
}

export default Contactus