import React, {Component} from 'react';

import './Header.css';
import Basket from '../Basket/Basket';
import Firebase from '../../config/Firebase';
import {Link } from 'react-router-dom';
class Header extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         show: false,
         loggedIn: false
      }
    }
    
    componentWillMount(){
        this.displayHelper();
    }

    handleMenuBakset = () => {

        this.setState((prevState) => {
            return {show: !prevState.show}
        })
    }

    displayHelper = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if(user){
                console.log('this is our state of our users,',user);
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
                console.log('we are not logged in ! so show the login/signup ')
            }
        })
    }

    displayProfile = () => {
        //here we will return the the profile icon 
    }

    displayText = () => {
        // Here we will return the text saying login/signup 
    }

    render() {
        return (
            <header className='header-container'>
               <Link to='/' className="header-style"><div><img src={require('../../assets/koala.png')} alt='koala-logo' className='header-side-logo' /></div><div className='header-title__first'>Koala</div> <div className="header-title">Sticker!</div></Link>
                <div className='header-side-container'>
                    <div>
                        <img  src={require('../../assets/cart.png')} className='header-container-icon' alt='koala-basket' />
                         <Basket show={this.state.show} />       
                    </div>
                    {
                        this.state.loggedIn ? this.displayProfile() : this.displayText()
                    }
                   <Link to='/Profile' className='header-style'> <div className='header-text'>Log in</div></Link>
                   <Link to='/about' className='header-style'><div className='header-faq'>FAQ</div> </Link>
                </div>
            </header>
        )
    }
}

export default Header;