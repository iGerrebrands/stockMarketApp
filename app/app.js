import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StockPanel from './stockpanel/StockPanel';
import BottomNavigation from 'material-ui/BottomNavigation/BottomNavigation';
import BottomNavigationItem from 'material-ui/BottomNavigation/BottomNavigationItem';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconHome from 'material-ui/svg-icons/action/home';

const locationIcon = <IconLocationOn/>;
const homeIcon = <IconHome/>;

export default class App extends React.Component {

    constructor() {
        super();
        injectTapEventPlugin();
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <BottomNavigation selectedIndex={1}>
                        <BottomNavigationItem
                            label="Test"
                            icon={locationIcon}
                            onTouchTap={() => {console.log('tab')}}
                        />
                        <BottomNavigationItem
                            label="Test"
                            icon={homeIcon}
                            onTouchTap={() => {console.log('tab')}}
                        />
                        <BottomNavigationItem
                            label="Test"
                            icon={homeIcon}
                            onTouchTap={() => {console.log('tab')}}
                        />
                    </BottomNavigation>
                    {/*<StockPanel />*/}
                </MuiThemeProvider>
            </div>
        );
    }

}

