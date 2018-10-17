import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: Number(props.time),
            interval: null,
            outOfTime: false,
        }
    }

    style = {
        backgroundColor: "white",
        margin: "5px",
        border: "2px solid black",
        borderRadius: "4px",
        width: "20%",
        boxShadow: "1px 1px #545454",
        padding: "10px",
    }

    clickHandler = () => {
        console.log(this.state);
        if (this.state.timer === 0) {
            clearInterval(this.state.interval);
            this.setState({
                outOfTime: true
            })
        } else {
            this.setState({
                timer: this.state.timer - 1
            })
        }
    }
    
    render() {
        if (this.state.outOfTime === false) {
            return (  
                <div style = {this.style} onClick={() => this.setState({interval: setInterval(this.clickHandler, 1000)})}>
                    Case Name: {this.props.caseName} <br/>
                    Assignee: {this.props.assignee} <br/>
                    Estimate: {this.props.estimate} <br/>
                    {this.state.timer}   
                </div> 
            );
        } else {
            return (
                <div style = {this.style}>
                    You're out of time! <br/>
                    Would you like to take this discussion offline? <br/>
                    <button>Take offline</button>
                </div>
            );
        }
    }
}

export default Card;