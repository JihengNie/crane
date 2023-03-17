import React from 'react';
import Home from './pages/home';
import parseRoute from './lib/parseRoute';
import Vote from './pages/vote';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  render() {
    if (this.state.route.path === 'home') {
      return <Home />;
    } else if (this.state.route.path === 'vote') {
      return <Vote/>;
    } else {
      return <Home />;
    }
  }
}
