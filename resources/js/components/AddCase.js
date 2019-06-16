import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BeneficiaryTable from './BeneficiaryTable';

export default class AddCase extends Component {
    render() {
        return (
            <div>
                <BeneficiaryTable />
            </div>
        );
    }
}

if (document.getElementById('add-case')) {
    ReactDOM.render(<AddCase />, document.getElementById('add-case'));
}
