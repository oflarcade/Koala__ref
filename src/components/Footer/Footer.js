import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <footer className='footer-container_outer'>
                <div className='footer-container'>
                    <div className='footer-left-container'>
                        <div className='footer-left__title'>Koala Stickers</div>
                        <div><img src={require('../../assets/koala.png')} className='footer-logo__icon' alt='footer-logo' /></div>
                    </div>

                    <div className='footer-left-container'>
                        <div className='footer-left__title'>The Fun Stuff:</div>
                        <div>
                            <a href='https://www.instagram.com/koalastickers/'><img src={require('../../assets/instagram.png')} className='footer-social-icons' alt='instagram-icon' /></a>
                            <a href='https://www.facebook.com/koalastickers/'><img src={require('../../assets/facebook.png')} className='footer-social-icons' alt='facebook-icon' /></a>
                            <img src={require('../../assets/twitter.png')} className='footer-social-icons' alt='twitter-icon' />
                        </div>
                    </div>

                    <div className='footer-left-container__map'>
                        <div className='footer-left__title'>Address:</div>
                        <div className='footer-left__title'>1, Place Tahar Haddad, Les Berges du lac, Tunis 1053. </div>
                    </div>
                </div>
                <div className='footer-left__title'>
                    © 2018.KoalaSticker, Powered by React+Redux 
                </div>
            </footer>
        )
    }
}

export default Footer;