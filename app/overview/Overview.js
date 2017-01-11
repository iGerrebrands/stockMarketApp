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
            },
            percentageClass: 'black'
        };
        setInterval(() => {
            this.updateLoop();
        }, 1000);
    }

    updateLoop() {
        getStockPriceHTTP(this.props.id)
            .then((res) => {
                const data = JSON.parse(res);
                let percentageClass = data.Feeds[0].P > 0 ? "green" : "red";
                percentageClass = data.Feeds[0].P === 0 ? "black" : percentageClass;
                this.setState({
                    stock: {
                        index: data.Feeds[0].I,
                        buy: data.Feeds[0].B,
                        sell: data.Feeds[0].S,
                        percentage: data.Feeds[0].P
                    },
                    percentageClass: percentageClass
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div className="overview">
                <table className="overview-table">
                    <tr className="overview-table-tr">
                        <td className="overview-table-tr-col-label">Index: </td>
                        <td className="overview-table-tr-col-data">{ this.state.stock.index }</td>
                    </tr>
                    <tr className="overview-table-tr">
                        <td className="overview-table-tr-col-label">Buy: </td>
                        <td className="overview-table-tr-col-data">{ this.state.stock.buy }</td>
                    </tr>
                    <tr className="overview-table-tr">
                        <td className="overview-table-tr-col-label">Sell: </td>
                        <td className="overview-table-tr-col-data">{ this.state.stock.sell }</td>
                    </tr>
                    <tr className="overview-table-tr">
                        <td className="overview-table-tr-col-label">Percentage: </td>
                        <td className={"overview-table-tr-col-data" + ' ' + this.state.percentageClass}>{ this.state.stock.percentage }%</td>
                    </tr>
                </table>
            </div>
        );
    }

}

