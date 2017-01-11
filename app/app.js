import React from 'react';
import Overview from './overview/Overview';

export default class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Overview id="111"/>
                <Overview id="123"/>
                <Overview id="124"/>
            </div>
        );
    }

}

