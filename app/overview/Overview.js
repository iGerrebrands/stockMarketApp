import React from 'react';
import getStockPriceHTTP from '../models/getStockPriceHTTP';

export default class Overview extends React.Component {

    constructor() {
        super();
        this.state = {
            stock: {
                index: 0,
                buy: 0,
                sell: 0,
                percentage: 0
            }
        };
        setInterval(() => {
            this.updateLoop();
        }, 1000);
    }

    updateLoop() {
        getStockPriceHTTP(this.props.id)
            .then((res) => {
                const data = JSON.parse(res);
                this.setState({ stock: {
                    index: data.Feeds[0].I,
                    buy: data.Feeds[0].B,
                    sell: data.Feeds[0].S,
                    percentage: data.Feeds[0].P
                }});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <div>
                    Index: <label>{ this.state.stock.index }</label>
                </div>
                <div>
                    Buy: <label>{ this.state.stock.buy }</label>
                </div>
                <div>
                    Sell: <label>{ this.state.stock.sell }</label>
                </div>
                <div>
                    Percentage: <label>{ this.state.stock.percentage }</label>
                </div>
            </div>
        );
    }

}

