import React from "react";
import PropTypes from "prop-types";


class App extends React.Component {
    state = {
        count : 0
    };

    add = () => {
        console.log("add");
        this.setState({count : this.state.count + 1});
    };

    minus = () => {
        console.log("minus");
        this.setState({count : this.state.count - 1});
    };

    
    render() {
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick = {this.add}>ADD</button>
                <button onClick = {this.minus}>MINUS</button>
            </div>
        );
    }
}



export default App;
