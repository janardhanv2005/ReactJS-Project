import React from 'react';

const UserDisplay = (props) => {

    const renderTable = ({userData}) => {
        console.log(userData);
        if (userData) {
            return userData.map((item) => {
                return (
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }
    return (
        <div className="container">
            <center><h3>User List</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default UserDisplay