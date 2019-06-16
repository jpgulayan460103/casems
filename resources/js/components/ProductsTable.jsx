import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ProductsTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        };
        this.addProduct = this.addProduct.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    };
    addProduct(params) {
        this.setState((prevState) => ({
            products: prevState.products.push(data),
        }))
        
    };
    handleEdit(index){
        this.props.editData(index);
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <tbody>
                        {this.props.products.map((products, index) =>
                            <tr key={index}>
                                <td>{products.email_address}</td>
                                <td>{products.password}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}