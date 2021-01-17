import React, { Component } from 'react'
import './CityCard.css'

class CityCard extends Component {

    // constructor
    constructor(props) {
        super(props);

        this.state = {
            zip: props.zip
        }
    };

    // render CityCard component
    render() {
        return (
            <div className='container'>
                <div className='aCityCard'>
                    <h5>{this.props.zip}</h5>
                </div>
            </div>
        )
    }
}

export default CityCard;
