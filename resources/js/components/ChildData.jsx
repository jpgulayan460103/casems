import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _forEach from 'lodash/forEach';

export default class ChildData extends Component {
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.resetForm = this.resetForm.bind(this);
        this.state = {
            formData: this.props.product
        };
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ formData: nextProps.product });
    }
    handleInput(event) {
        let target = event.target;
        let name = target.name;
        let value;
        switch (target.type) {
            case 'checkbox':
                value = target.checked;
                break;
            case 'select-multiple':
                value = [];
                for (let index = 0; index < target.options.length; index++) {
                    if (target.options[index].selected) {
                        value.push(target.options[index].value);
                    }
                }
                break;
            default:
                value = target.value
                break;
        }
        let formData = this.state.formData;


        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            }
        }));
    }

    resetForm(){
        let resetFormData = [];
        _forEach(this.state.formData, function(value, key) {
            if (key == 'options'){
                resetFormData[key] = [];
            }else{
                resetFormData[key] = "";
            }
        });
        this.setState({ formData: resetFormData });
    }

    
    formSubmit() {
        this.props.addData(this.state.formData);
        this.resetForm();
    };
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" name="email_address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.formData.email_address || ''} onChange={this.handleInput} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" value={this.state.formData.password || ''} onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                        <select multiple={true} className="form-control" name="options" id="exampleFormControlSelect2" value={this.state.formData.options || []} onChange={this.handleInput}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.formSubmit}>Button</button>
                </form>
            </div>
        );
    }
}