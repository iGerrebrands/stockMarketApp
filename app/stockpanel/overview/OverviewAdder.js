import React from 'react';

import getAllStockHTTP from '../../models/getAllStocksHTTP';

import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete/AutoComplete';

export default class OverviewAdder extends React.Component {

    constructor() {
        super();
        this.state = {
            index: 0,
            stocks: []
        };
    }

    componentDidMount() {
        getAllStockHTTP()
            .then((res) => {
                const data = JSON.parse(res);
                this.setState({stocks: data});
            })
            .error((error) => {
                console.error(error);
            });
    }

    handleChange(chosenRequest) {
        if(chosenRequest === null) {
            this.setState({
                index: -1
            });
            return;
        }
        this.setState({
           index: chosenRequest.Id
        });
    }

    handleClick() {
        this.props.addOverview(this.state.index);
    }

    render() {
        return (
            <div className="overview-adder">
                <AutoComplete
                    hintText="Stock name"
                    dataSource={this.state.stocks}
                    maxSearchResults={5}
                    dataSourceConfig={{
                        text: 'EnglishName',
                        value: 'Id'
                    }}
                    onNewRequest={this.handleChange.bind(this)}
                />
                <RaisedButton
                    onClick={this.handleClick.bind(this)}
                    primary={true}
                    label="Add Stock"
                />
                <label className="overview-adder-message">{this.props.message}</label>
            </div>
        );
    }

}

