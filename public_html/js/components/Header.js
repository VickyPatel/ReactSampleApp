import React from "react";

export default class Header extends React.Component {

    handleChange(e){
        const title = e.target.value;
        console.log(title);
        this.props.setHeaderTitle(title);
    };

    render() {
        return (
            <header>
                <p>Header Text {this.props.title}</p>
                <input onChange={this.handleChange.bind(this)} />
            </header>
        );
    }
};