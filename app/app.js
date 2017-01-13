import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import StockIcon from 'material-ui/svg-icons/action/account-balance';
import HistoryIcon from 'material-ui/svg-icons/action/history';
import HomeIcon from 'material-ui/svg-icons/action/home';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

import StockPanel from './stockpanel/StockPanel';

export default class App extends React.Component {

    constructor() {
        super();
        injectTapEventPlugin();
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Tabs>
                        <Tab
                            icon={<StockIcon />}
                            label="Stocks"
                        >
                            <StockPanel />
                        </Tab>
                        <Tab
                            icon={<HomeIcon />}
                            label="Home"
                        >
                            <h1>Home</h1>
                        </Tab>
                        <Tab
                            icon={<HistoryIcon />}
                            label="History"
                        >
                            <h1>Map</h1>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        );
    }

}

