import React from 'react';
import Overview from './overview/Overview';

export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Overview />
            </div>
        );
    }

}

