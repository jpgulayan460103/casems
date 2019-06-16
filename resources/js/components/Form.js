import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "a",
            middle_name: "b",
            last_name: "c",
        };
        this.formSubmit = this.formSubmit.bind(this)
    };
    formSubmit() {
        
    };
    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.first_name} className="form-control" />
                    <input type="text" value={this.state.middle_name} className="form-control" />
                    <input type="text" value={this.state.last_name} className="form-control" />
                </form>
            </div>
        );
    }
}
if (document.getElementById('sample-form')) {
    ReactDOM.render(<Form />, document.getElementById('sample-form'));
}