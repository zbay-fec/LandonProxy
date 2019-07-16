import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <>
  <Search />
  <Router>
    <div className='app'>
      <Route exact path='/' component={ItemDetail} />
      <Route exact path='/' component={Carousel} />
      <Route path='/cart' component={Cart} />
    </div>
    
  </Router>
  </>
);

export default App;