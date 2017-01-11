import React from 'react';
import getStockPriceHTTP from '../models/getStockPriceHTTP';

export default class Overview extends React.Component {

    constructor() {
        super();
        this.state = { data: "test" };
        setInterval(() => {
            this.updateLoop();
        }, 1000);
    }

    updateLoop() {
        getStockPriceHTTP("123").then((res) => {
            const data = JSON.parse(res);
            this.setState({data: data});
            console.log(data.Feeds[0]);
        });
    }

    render() {
        return (
            <div>
                <h1>{ JSON.stringify(this.state.data) }</h1>
            </div>
        );
    }

}

