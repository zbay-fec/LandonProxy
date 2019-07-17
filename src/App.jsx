import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false
    }
  }

  componentDidMount() {
    window.addEventListener('showCart', e => this.setState({ showCart: e.detail.showCart }))
  }

  render() {
    if (this.state.showCart) {
      return (
        <div>
          <Search />
          <Cart />  
        </div>
      ); 
    } else {
      return (
        <div>
          <Search />
          <ItemDetail />
          <Carousel />
        </div>
      );
    }
  }
}

const App = () => (
  <>
    <Search />
    <Router>
      <div className="app">
        <Route exact path="/" component={ItemDetail} />
        <Route exact path="/" component={Carousel} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  </>
);

export default App;
