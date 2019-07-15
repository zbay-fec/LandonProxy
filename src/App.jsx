import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends React.Component {
  render() {

  }
}

const App = () => (
  <Router>
    <div className="app">
      <Route path='/' component={Carousel} />
    </div>
  </Router>
);