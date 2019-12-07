import React from 'react';
import './App.css';
import Tab from './Tab';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Lorem ipsum', content: `Lorem ipsum dolor sit amet.` },
      { title: 'Duis aliquam', content: `Duis aliquam nisi tempor iaculis` },
      { title: 'Pellentesque', content: `Pellentesque, blandit felis in.` },
    ],
  };

  render() {
    return (
      <Tab tabs={this.state.tabs} />
    );
  }
}

export default App;
