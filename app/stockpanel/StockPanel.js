import React from 'react';
import Overview from './overview/Overview';
import OverviewAdder from './overview/OverviewAdder';
import OverviewsModel from '../models/OverviewsModel';
import AllStockModel from '../models/AllStockModel';

export default class StockPanel extends React.Component {

    constructor() {
        super();
        this.models = {
            overview: new OverviewsModel(),
            allStocks: new AllStockModel()
        };
        this.state = {
            overviews: this.modelToView(),
            message: ""
        };
    }

    modelToView() {
        let viewArray = [];
        this.models.overview.overviews.forEach((id, index) => {
            viewArray.push(<Overview id={id} stock={this.models.allStocks.getStockById(id)} key={index} />);
        });
        return viewArray;
    }

    addOverview(id) {
        if(this.models.allStocks.getStockById(id) === null) {
            this.setState({
                message: "This stock does not exist!"
            });
            return;
        }
        this.models.overview.addOverview(id);
        this.setState({
            overviews: this.modelToView(),
            message: "Stock added."
        });
    }

    render() {
        return (
            <div className="stock-panel">
                <OverviewAdder addOverview={this.addOverview.bind(this)} message={this.state.message} />
                <div className="stock-panel-stocks">
                    { this.state.overviews }
                </div>
            </div>
        );
    }

}