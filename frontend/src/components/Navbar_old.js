import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { menuData } from './data/MenuData';
// import Button from './Button';
import { Button } from './Button';
import './Navbar.css';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #000;
    `;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1 rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;    
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    `;

const MenuBars = styled.i``;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton)

    return (
        <div className="test">
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        A.M.Y <i class="fas fa-record-vinyl"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                WHO WE ARE
                        </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signin' className='nav-links-mobile' onClick={closeMobileMenu}>
                                SIGN IN
                        </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Click Me</Button>}
                </div>
            </nav>
            {/* <Nav>
                <Logo to = "/">A.M.Y <i class="fas fa-record-vinyl" /></Logo>
                <MenuBars />
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to = {item.link} key = {index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to = "/button">Click Me</Button>
                </NavBtn>
            </Nav> */}
        </div>
    );
};
export default Navbar;