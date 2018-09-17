import React, { Component } from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SimpleExpansionPanel from '../../components/Expansions/Expansions' ;

// this is the about me page 

class About extends Component{
    render(){
        return (
            <div>
                <Header />
                    <div className='spacer'>
                    <div className='about-banner'> <img src={require('../../assets/addOns2.png')} className='about-addon-img' alt='koala-promotion'  /></div>
                    
                    <div className='about-banner'> <img src={require('../../assets/addOns1.png')} className='about-addon-img_second' alt='koala-promotion'  /></div>
                    </div>
                    
                    <main className='about-style'>
                        <div className='about-titles'> FAQ </div>
                        <SimpleExpansionPanel />
                    </main>
                    <div className='spacer'>
                        <div><img src={require('../../assets/Welcome-Banner.png')} className='about-addon-img_third' alt='koala-promotion' /></div>    
                    </div>
                <Footer />
            </div>
        )
    }
}


export default About;