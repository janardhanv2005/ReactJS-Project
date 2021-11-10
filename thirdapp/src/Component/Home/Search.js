import React, { Component } from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const url = "https://developerfunnel.herokuapp.com/location"
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="
class Search extends Component {
    constructor(props) {
        super()

        this.state = {
            location: '',
            hotels: ''
        }
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item._id} key={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const cityId = event.target.value;

        fetch(`${hotelUrl}${cityId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ hotels: data })
            })
    }

    renderHotel = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item._id} key={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleHotel = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render() {
        return (
            <div id="search">
                <div id="header">
                    <div id="brand">
                        Developer Funnel
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/">
                            <img src="images/facebook.png" className="socialIcon" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="images/insta.png" className="socialIcon" />
                        </a>
                    </div>
                </div>
                <hr />
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find The Best Place To Enjoy
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity}>
                        <option>------SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="secondSelect" onChange={this.handleHotel}>
                        <option>------SELECT HOTELS----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    // api call 
    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ location: data })
            })
    }

}

export default withRouter(Search);