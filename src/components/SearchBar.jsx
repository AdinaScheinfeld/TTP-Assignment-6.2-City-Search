import React, { Component } from 'react'
import axios from 'axios';

import CityCard from './CityCard'

import './SearchBar.css'

class SearchBar extends Component {

    constructor () {
        super();
        this.state = {
            data: [],
            city: "",
            cityFound: false,
        };
    }

    // Change the state of the city when the user enters a new city
    changeCity = (event) => {
        this.setState({city: event.target.value});
    }

    // Get data about a city using axios
    getCityInfo = () => {

        axios.get(`http://ctp-zip-api.herokuapp.com/city/${this.state.city.toUpperCase()}`)
            .then(response => {
                console.log(response.data);
                this.setState({data: response.data, cityFound: true});
            })
            .catch(err => {
                console.log(err);
                this.setState({ cityFound: false });
            });
    }

    // Render SearchBar component
    render() {
        return (

            // Display header section with a title, search bar, and button
            <div className='container'>
                <div className='searchArea'>
                    <div className='searchBarBack'>
                        <h3>City Search</h3>
                    </div>

                    <p>City: </p>
                    <input
                        className='searchBar'
                        type='text'
                        value={this.state.city}
                        placeholder='Please enter a city name'
                        onChange={this.changeCity}
                    ></input>
                    <button
                        className='searchButton'
                        onClick={this.getCityInfo}
                    >Search</button>
                </div>

                {this.state.cityFound ? (
                    <div className='validCitySection'>
                        {this.state.data.map((place, index) => (
                            <CityCard key={index} zip={place} />
                ))}
            </div>
        ) : (
            <div className='InvalidCitySection'>
                <p>No results</p>
            </div>
            )
        }
        </div>
        );
    }
}


export default SearchBar;
