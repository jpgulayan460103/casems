import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildData from './ChildData.jsx';
import ProductsTable from './ProductsTable.jsx';
import ApiMain from './ApiMain.jsx';

export default class PassData extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hello",
            passedMessage: "",
            showDiv: false,
            products: [],
            product: this.productForm(),
            selectedProductIndex: null,
            getResponse: {}
        };
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.getRequest = this.getRequest.bind(this);
    };

    componentDidMount(){
        
    };
    productForm(){
        return {
            email_address: "",
            password: "",
            options: [],
        };
    }

    getRequest(){
        ApiMain.Product.getList()
            .then((res) => {
                this.setState({getResponse: res.data});
            })
            .catch(() => { })
            .then(() => { });
    }

    onAdd(formData){
        this.setState({getResponse : {}});
        this.getRequest();
        let products = this.state.products;
        if (this.state.selectedProductIndex == null){
            products.push(formData);
            this.setState({ products: products });
        }else{
            products[this.state.selectedProductIndex] = formData;
            this.setState({ products: products });
            this.setState({ selectedProductIndex: null });
            this.setState({ product: this.productForm() });
        }
    };
    onEdit(index){
        this.setState({ product: this.state.products[index] });
        this.setState({ selectedProductIndex: index });
    }
    render() {
        return (
            <div>
                <ChildData addData={this.onAdd} product={this.state.product} formErrors={this.state.getResponse}/>
                <span>{ this.state.showDiv ? this.state.passedMessage : ""}</span>
                <ProductsTable products={this.state.products} editData={this.onEdit} />
            </div>
        );
    }
}

if (document.getElementById('pass-data')) {
    ReactDOM.render(<PassData />, document.getElementById('pass-data'));
}

