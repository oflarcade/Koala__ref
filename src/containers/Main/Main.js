import React, {Component} from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/ItemCard/ItemCard';
import Firebase from '../../config/Firebase';
import Grid from '@material-ui/core/Grid';

import './Main.css';

class Main extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         stock : []
      };
    };
    
    loadData = () => {
        Firebase.database().ref('Stock/').once('value', snapshot => {
            this.setState({stock: snapshot.val().filter(el => el.id !== 0)});
        }).then((res) => {
            console.log('this is our stock:',this.state.stock);
        })
    }

    componentDidMount(){
        this.loadData();
    }

    card =(item) => {
        if(item.id !== 0){
            return <Card item={item} />
        }
    }

     renderCard =() => {
           return (
            <Grid container style={{flexGrow:1}} spacing={16}>
            <Grid item xs={12}>
              <Grid container  justify="center" spacing={8}>
                {this.state.stock.map((item) => (
                  <Grid key={item.id} item>
                    <Card item={item} />

                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
           )
        
        
    } 

    render() {
        return (
            <div>
                <Header />
                <div className='main-spacer' />
                <main  className='main-banner'>
                        <div style={{marginTop: '30px'}} />
                        {this.renderCard()}
                </main>
                <div className='main-spacer' />
                <Footer />
            </div>
        )
    }
}

export default Main;