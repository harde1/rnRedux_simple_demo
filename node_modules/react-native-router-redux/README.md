# react-native-router-redux

Router component to be used in your React Native redux applications.  Packed with Nav and TabBar support.

![demo](http://f.cl.ly/items/1e0x2X1Z2G1B2E3l1F1Q/Screen%20Recording%202015-11-23%20at%2008.11%20AM.gif)

## getting started

The easiest way to get started is to check out the example:

```
cd example/ReduxRouter/
npm install
react-native start
```

or install it into your React Native application:

```
npm install -S react-native-router-redux
```

Import and connect the router in your container:

```javascript
// reducers/index.js
import { reducer as router } from 'react-native-router-redux';

export {
  router, // the key must be 'router'
};

// hook up the reducers
import * as reducers from '../reducers';
const reducer = combineReducers(reducers);

// import react-native-router-redux
import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute
} from 'react-native-router-redux';

// connect your state and actions (using react-redux)
const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

// define your routes
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
  tabBar: TabBar,
};

class Application extends Component {
  render() {
    return (
      <Router {...this.props} assets={assets} initial="signIn">
        <Schema name="default" {...defaultSchema} />

        <Route name="signIn" component={SignIn} type="reset" hideNavBar={true} />
        <Route name="detail" component={Detail} />
        <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
          <Route name="tab1" component={Master('#111')} title="Home" tabItem={{icon: assets['home'], title: 'Home'}} />
          <Route name="tab2" component={Master('#222')} title="Calendar" tabItem={{icon: assets['calendar'], title: 'Calendar'}} />
          <Route name="tab3" component={Master('#333')} title="Video" tabItem={{icon: assets['video'], title: 'Video'}} />
          <Route name="tab4" component={Master('#444')} title="Profile" tabItem={{icon: assets['profile'], title: 'Profile'}} />
        </TabRoute>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
```

## inspiration

Thanks to [aksonov/react-native-router-flux](https://github.com/aksonov/react-native-router-flux) for providing the basis for this package.
