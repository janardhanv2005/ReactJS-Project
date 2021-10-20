import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json';

class Home extends Component{
    render() {
        return (
            <>
                <Header/>
                <h1>This is React App</h1>
                <h2>Hiiiii</h2>
                <Footer year="2021" month="Oct"/>
            </>
        )
    }
}

export default Home;