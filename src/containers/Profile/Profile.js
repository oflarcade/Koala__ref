import React, { Component } from 'react';
import './Profile.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Firebase from '../../config/Firebase';

class Profile extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         loggedIn : false,
      }
    }
    


    componentWillMount(){
        Firebase.auth().onAuthStateChanged(user=> {
            if(user){
                console.log('this is our state of user,',user);
                this.setState({loggedIn: true})
            } else {
                console.log('this is our state of user,',user);
                this.setState({loggedIn: false})
            }
        });
    }

    displayProfile = () => {
        return (
            <div>
                <p>This is our Profile</p>
            </div>
        )
    }

    displayContainer = () => {
        return (
            <div>
                <p> This is our container</p>
            </div>
        )
    }


    render(){
        return(
            <div>
                <Header />
                    <main className='profile-container'>
                    {this.state.loggedIn ? this.displayProfile() : this.displayContainer() }
                    </main>
                <Footer />
            </div>
        )
    }
}

export default Profile;