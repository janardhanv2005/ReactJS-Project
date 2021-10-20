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
    render() {
        return (
            <Fragment>
                <header>
                    <div id="logo">{this.state.title}</div>
                    <center>
                        <input />
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