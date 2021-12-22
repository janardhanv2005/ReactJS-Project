import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "http://localhost:7601/booking";
class Booking extends Component {
    constructor(){
        super();
        this.state={
            bookings:''
        }
    }
    render(){
        if(!sessionStorage.getItem('userdata')){
            return (
                <div>
                    <h1>Login First To See Your Booking</h1>
                </div>
            )
        }
        return(
            <>
            <BookingDisplay bookData={this.state.bookings}/>
            </>
        )
    }

    //api call 
    componentDidMount(){
        console.log("TTTTT")
        if(sessionStorage.getItem('userdata')){
            let email = sessionStorage.getItem('userdata').split(',')[1];
            axios.get(`${url}?email=${email}`).then((res) => {
                this.setState({bookings:res.data})
                console.log("TEST")
                console.log(this.state.bookings)
            })
        }
        
    }
}

export default Booking
