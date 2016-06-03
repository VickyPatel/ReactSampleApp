import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {'name':'bob'};
        this.age = 25;
    }

    setHeaderTitle(title){
        console.log(title);
        this.setState({'title':title});
    }

    render() {
        return (
            <div>
                <Header setHeaderTitle={this.setHeaderTitle.bind(this) } title={this.state.title}/>
            	<h1>Hello world. I am working.</h1>   
                <p>State  {this.state.name}</p>
                <p></p> 
                <Footer age={this.age}/>
            </div>
        );
    }
};