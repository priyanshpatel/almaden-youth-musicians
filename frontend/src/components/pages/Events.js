import React from 'react'
import { Button } from '../Button'
import '../HeroSection.css'
import '../../App.css'
import { Link } from 'react-router-dom';
import InfoSection from '../InfoSection';
import {homeObjOne} from './Data';
import Events from '../Events';

function Event() {
    return (
        <div id="events">
            <Events/>
        </div>
    )
}

export default Event