import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: ''
        }
    }

    handleLogout = () => {
        this.setState({ userdata: '' })
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userdata')
        this.property.history.push('/')

    }

    condtionalHeader = () => {
        if (this.state.userdata.name) {
            let data = this.state.userdata;
            let outputarray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userdata', outputarray);
            return (
                <>
                    <li><Link>Hi {this.state.userdata.name}</Link></li>
                    <li><button onClick={this.handleLogout}>Logout</button></li>
                </>
            )

        } else {
            return (
                <>
                    <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>
                        Signup</Link></li>
                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>
                        Login</Link></li>
                </>
            )
        }
    }


    render() {
        console.log(this.state.userdata);
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">Developer Hotels</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/viewBooking">Booking</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {this.condtionalHeader()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

componentDidMount() {
     
    console.log("In componentDidMount");
    fetch(url, {
        method: 'GET',
        headers: {
            'x-access-token': sessionStorage.getItem('ltk')
        }
    })
        .then((res) => res.json())
        .then((data) => { 
            console.log("In data", data);
            this.setState({ userdata: data }) 
        })
    }
}

export default withRouter(Header)