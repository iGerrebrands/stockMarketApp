import React from 'react';

export default class OverviewAdder extends React.Component {

    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    handleChange(event) {
        this.setState({
           index: event.target.value
        });
    }

    handleClick() {
        this.props.addOverview(this.state.index);
    }

    render() {
        return (
            <div className="overview-adder">
                <input type="number" className="overview-adder-input" value={this.state.index} onChange={this.handleChange.bind(this)}/>
                <button className="overview-adder-button" onClick={this.handleClick.bind(this)}>Add overview</button>
                <label className="overview-adder-message">{this.props.message}</label>
            </div>
        );
    }

}

