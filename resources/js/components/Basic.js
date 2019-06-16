import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChildData extends Component {
    constructor(props){
        super(props);
        this.state = {
            alertMessage: "World",
        };
        this.testAlert = this.testAlert.bind(this)
    };
    async testAlert(params) {
        await this.setState({ alertMessage: 'Hi' });
        console.log(this.state);
    };
    render() {
        return (
            <div>
                <button onClick={this.testAlert}>Button</button>
            </div>
        );
    }
}