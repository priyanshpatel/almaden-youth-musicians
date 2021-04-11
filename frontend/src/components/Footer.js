import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            AYM
                            <i class="fas fa-record-vinyl"></i>
                        </Link>
                    </div>
                    <small class='website-rights'>Almaden Youth Musicians © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link youtube'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <a class="youtube-anchor" href="https://www.youtube.com/channel/UC3DiHT6KoQxPQD0BFiFd9Rw" target="_blank">YouTube<i class='fab fa-youtube' /></a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;