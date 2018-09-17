import React, { Component } from 'react';
import './ItemCard.css';
import Button from '@material-ui/core/Button';


class Card extends Component {


    stockHelper = (item) => {
        if(item.quantity>0){
            return <div className='card-stock__green'>In Stock.</div>
        } else {
            return <div className='card-stock__red'>Out of Stock.</div>
        }
    }



    render() {
        return (
            <div className='card-container'>
                
                <div>
                    <div className='card-price__floating'>
                        <div className='card-price__floating-text'>{this.props.item.price} Dt</div>
                    </div>
                    
                    <img src={this.props.item.url} className='card-image' alt='koala-sticker' />
                    
                </div>
                <div  className='custom-Card-Divider' />
                <div className='card-container__text'>
                    {this.props.item.name}
                </div>

                <div  className='custom-Card-Divider' style={{marginTop: '8px'}}/>
                <div className='card-footer-container'>
                    <Button variant="contained" color="default">
                        <div className='card-button__text'>Add to Basket</div>
                    </Button>
                </div>
                

            </div>
        )
    }
}

export default Card;