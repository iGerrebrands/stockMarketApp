import React from 'react';
import StockPanel from './stockpanel/StockPanel';

export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <StockPanel />
            </div>
        );
    }

}

