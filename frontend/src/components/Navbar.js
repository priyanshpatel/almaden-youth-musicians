// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             TRVL
//             <i class='fab fa-typo3' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/services'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/products'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to='/sign-up'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Link as linkScroll } from "react-scroll";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import cookie from 'react-cookies';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const onLoginSuccess = (response) => {
    console.log("==========Login success===========")
    console.log(response.tc.id_token);
    console.log(response.profileObj);
    // save name
    cookie.save("name", response.profileObj.givenName, {
      path: "/",
      httpOnly: false,
      maxAge: 120000,
    });
    // save image url
    cookie.save("image", response.profileObj.imageUrl, {
      path: "/",
      httpOnly: false,
      maxAge: 120000,
    });
    // save token
    cookie.save("token", response.tc.id_token, {
      path: "/",
      httpOnly: false,
      maxAge: 120000,
    });
    // save email
    cookie.save("email", response.profileObj.email, {
      path: "/",
      httpOnly: false,
      maxAge: 120000,
    });
    window.location.reload("/");
  };

  const onLoginFailure = (response) => {
    console.log("login failure")
    console.log(response)
  };

  const onLogout = (response) => {
    console.log("onlogout", response);
    cookie.remove('name', { path: '/' })
    cookie.remove('image', { path: '/' })
    cookie.remove('token', { path: '/' })
    cookie.remove('email', { path: '/' })
    window.location.assign("/");
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AYM<i class="fas fa-record-vinyl"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                // to='/signin'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                {/* SIGN IN */}
                {cookie.load('token') ? <GoogleLogout
                  clientId="120733525518-fk1ski1fl6apfrlmhbh91i5ojdru036v.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={onLogout}
                  onFailure={onLoginFailure}
                /> : <GoogleLogin
                    clientId="120733525518-fk1ski1fl6apfrlmhbh91i5ojdru036v.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={"single_host_origin"}
                  />}
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline' link='/signin'>SIGN IN</Button>} */}
          {cookie.load('token') ? <GoogleLogout
            clientId="120733525518-fk1ski1fl6apfrlmhbh91i5ojdru036v.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={onLogout}
            onFailure={onLoginFailure}
            className='nav-item-google'
          /> : <GoogleLogin
              clientId="120733525518-fk1ski1fl6apfrlmhbh91i5ojdru036v.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              className='nav-item-google'
            />}


          {/* {button && <GoogleLogin
            clientId="120733525518-fk1ski1fl6apfrlmhbh91i5ojdru036v.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
          />} */}

        </div>
      </nav>
    </>
  );
}

export default Navbar;