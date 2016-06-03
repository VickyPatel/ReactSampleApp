import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render(){
    return (
   		<div>
   			<h1>Hello world. change. update awesome</h1>
      	</div>
    );
  }
};

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
