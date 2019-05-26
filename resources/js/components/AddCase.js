import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BeneficiaryTable from './BeneficiaryTable';

export default class Example extends Component {
    render() {
        return (
            <div>
                <BeneficiaryTable />
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
