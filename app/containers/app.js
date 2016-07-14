'use strict';

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    actions as routerActions,
    NavBar,
    Route,
    Router,
    Schema,
    TabBar,
    TabRoute
} from 'react-native-router-redux';
import Detail from '../components/Detail';
import Detail2 from '../components/Detail2';
import Master from '../components/Master';
import SignIn from '../components/SignIn';
import ChangeCount from '../components/ChangeCount';
const mapStateToProps = state => ({
    router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...routerActions,
    }, dispatch),
    dispatch,
});

const defaultSchema = {
    navBar: NavBar,
    navLeftColor: '#FFFFFF',
    navTint: '#224655',
    navTitleColor: '#FFFFFF',
    navTitleStyle: {
        fontFamily: 'Avenir Next',
        fontSize: 18,
    },
    statusStyle: 'light-content',
    tabBar: TabBar
};

const assets = {
    calendar: require('../assets/thin-0021_calendar_month_day_planner.png'),
    home: require('../assets/thin-0046_home_house.png'),
    logo: require('../assets/qwikly.png'),
    profile: require('../assets/thin-0091_file_profile_user_personal.png'),
    video: require('../assets/thin-0592_tv_televison_movie_news.png')
};

class Application extends Component {
    render() {
        return (
            <Router {...this.props} assets={assets} initial="signIn">
                <Schema name="default" {...defaultSchema} />
                <Route name="signIn" component={SignIn} type="reset"/>
                <Route name="detail" component={Detail} hideFooter={true} hideNavBar={true}/>
                <Route name="detail2" component={Detail2} hideFooter={true} hideNavBar={true}/>
                <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
                    <Route name="tab1" component={ChangeCount} title="Home"
                           tabItem={{icon: assets.home, title: 'Home'}}/>
                    <Route name="tab2" component={Master} title="Calendar"
                           tabItem={{icon: assets.calendar, title: 'Calendar'}}/>
                    <Route name="tab3" component={Master} title="Video"
                           tabItem={{icon: assets.video, title: 'Video'}}/>
                    <Route name="tab4" component={ChangeCount} title="Profile"
                           tabItem={{icon: assets.profile, title: 'Profile'}}/>
                </TabRoute>
            </Router>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
