import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false
    };
  }

  componentDidMount() {
    window.addEventListener('showCart', e =>
      this.setState({ showCart: e.detail.showCart })
    );
  }

  render() {
    if (this.state.showCart) {
      return (
        <div>
          <Search />
          <Cart />
          <Carousel showCart={true} />
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
