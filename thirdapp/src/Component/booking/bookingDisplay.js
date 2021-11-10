import React from 'react';

const BookingDisplay = (props) => {

    const renderTable = ({bookData}) => {
        console.log(bookData);
        if (bookData) {
            return bookData.map((item) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.cost}</td>
                    </tr>
                )
            })
        }
    }
    return (
        <div className="container">
            <center><h3>Booking List</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Hotel</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Bank Name</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingDisplay