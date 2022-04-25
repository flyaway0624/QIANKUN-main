
import React, { Component } from 'react'
import { withRouter, HashRouter } from 'react-router-dom';
import RouterEach from '../router/RouterEach';


class Content extends Component {
  render() {
    let routerMap = this.props.routerMap
    return (
      <HashRouter >
        <RouterEach routerConfig={routerMap} />
      </HashRouter >
    )
  }
}

export default withRouter(Content);