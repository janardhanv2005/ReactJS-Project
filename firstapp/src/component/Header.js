import React, { Component, Fragment } from 'react';
import './Header.css';
class Header extends Component {
    constructor() {
        super();
        this.temp = "mytest";
        this.state={
            title:'React Search',
            keyword:'User Input here'
        };
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({keyword: event.target.value? event.target.value: 'User Input here'})
        //passing data to props
        this.props.userText(event.target.value);
    }
    render() {
        return (
            <Fragment>
                <header>
                    <div id="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{ color: 'white' }}>{this.state.keyword}</div>
                        {/* <div style={{ color: 'white' }}>{this.temp}</div> */}
                    </center>
                </header>
                <hr />
            </Fragment>
        )
    }
}

export default Header;