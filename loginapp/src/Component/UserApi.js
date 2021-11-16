import React,{Component} from 'react';
import axios from 'axios';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users";
class Users extends Component {
    constructor(){
        super();
        this.state={
            users:''
        }
    }
    render(){
        return(
            <>
            <UserDisplay userData={this.state.users}/>
            </>
        )
    }

    //api call 
    componentDidMount(){
        axios.get(url).then((res) => {
            this.setState({users:res.data})
            console.log(this.state.users)
        })
    }
}

export default Users