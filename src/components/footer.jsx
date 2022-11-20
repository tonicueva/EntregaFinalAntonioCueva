import React from 'react';

const Footer = () => {
    return (
        <div className='miFooter'>
            <div className='divNombreFooter'>
                <h1 className='nombreFooter'>Verónica Berenstein</h1>
            </div>
            <div>
                <h4 className='rights'>All rights reserved</h4>
            </div>
            <div className='rrss'>
                <img className='logoRrss logoIg' src='./assets/logoInstagram.png'></img>
                <img className='logoRrss' src='./assets/logoGmail.png'></img>
            </div>
        </div>
    );
}

export default Footer;
