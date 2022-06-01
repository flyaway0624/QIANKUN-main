
import React, { Component } from 'react'
import { withRouter, Switch } from 'react-router-dom';
import RouterEach from '../router/RouterEach';


class Content extends Component {
  render() {
    let routerMap = this.props.routerMap
    return (
      <Switch >
        <RouterEach routerConfig={routerMap} />
      </Switch >
    )
  }
}

export default withRouter(Content);