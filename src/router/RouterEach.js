import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { createHashHistory } from 'history'
const history = createHashHistory()
// import { CacheSwitch } from 'react-router-cache-route'
class RouterLogin extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    let { location, routerConfig } = this.props;
    let targetRouterConfig = routerConfig.find(
      (item) => item.path === location.pathname
    );
    console.log('location.pathname',location.pathname)
    if (location.pathname === "/") {
      history.replace('/react')
    }

    if (!targetRouterConfig &&location.pathname !== "/") {
      history.replace('/404')
    }
    return (
      routerConfig.map(item => {
        return <Route when={'always'} key={item.path} exact path={item.path} component={item.component} />
      })
    )
  }
}

export default withRouter(RouterLogin);
