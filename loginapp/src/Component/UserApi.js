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
        console.log(sessionStorage.getItem('rtk'));
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile')
        }
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