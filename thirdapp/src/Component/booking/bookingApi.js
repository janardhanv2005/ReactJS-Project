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
        return(
            <>
            <BookingDisplay bookData={this.state.bookings}/>
            </>
        )
    }

    //api call 
    componentDidMount(){
        console.log("TTTTT")
        axios.get(url).then((res) => {
            this.setState({bookings:res.data})
            console.log("TEST")
            console.log(this.state.bookings)
        })
    }
}

export default Booking