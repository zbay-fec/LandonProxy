import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="app">
      <Route path='/carousel' component={Carousel} />
      <Route path='/cart' component={Cart} />
    </div>
    
  </Router>
);

export default App;