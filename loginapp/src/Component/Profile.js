import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            user:''
        }
    }

    condtionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role == 'Admin'){
                return(
                    <Link className="btn brn-primary" to="/user">Users</Link>
                )
            }
        }
    }
    handleLogout=() =>{
        sessionStorage.removeItem('ltk');
        this.props.history.push('/');
    }

    render(){
        let {user} = this.state
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',user.role)
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1>Profile</h1>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {user.name}</h1>
                        <h2>Your  Email id is {user.email}</h2>
                        <h2>Your Phone is {user.phone}</h2>
                        <h2>Your Role is {user.role}</h2>
                        {this.condtionalRender()} &nbsp;
                        <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>

                    </div>
                </div>
            </div>
        )
    }

    //api call to get the user info
    componentDidMount() {
        fetch(url,{
            method: 'GET',
            headers: {
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => { 
            this.setState({user:data})
        })
    }
}

export default Profile