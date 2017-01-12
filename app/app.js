import React from 'react';
import Overview from './overview/Overview';
import OverviewAdder from './overview/OverviewAdder';
import OverviewsModel from './models/OverviewsModel';

//http://www.plus500.nl/Common/InstrumentsLookupHandler.ashx?gid=23&hl=nl&op=Plus500CY

export default class App extends React.Component {

    constructor() {
        super();
        this.model = new OverviewsModel();
        this.state = {
            overviews: this.modelToView()
        };
    }

    modelToView() {
        let viewArray = [];
        this.model.overviews.forEach((id, index) => {
            viewArray.push(<Overview id={id} key={index} />);
        });
        return viewArray;
    }

    addOverview(id) {
        this.model.addOverview(id);
        this.setState({
            overviews: this.modelToView()
        });
    }

    render() {
        return (
            <div>
                <OverviewAdder addOverview={this.addOverview.bind(this)}/>
                { this.state.overviews }
            </div>
        );
    }

}

