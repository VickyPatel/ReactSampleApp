import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {'name':'bob'};
    }
    render() {
        setTimeout(function(){
            this.setState({'name':'Bar'});
        }.bind(this), 2000);
        return (
            <div>
                <Header/>
            	<h1>Hello world. { this.state.name } I am working.</h1>    
                <Footer/>
            </div>
        );
    }
};