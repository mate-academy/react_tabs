import React from 'react';
import './App.scss';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      {
        title: 'Tabs 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          + ' Hic numquam quos sapiente.'
          + ' Est illo omnis, rem saepe similique ullam! Minima.',
      },
      {
        title: 'Tabs 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          + ' Ad, harum.',
      },
      { title: 'Tabs 3', content: 'Lorem ipsum dolor sit amet.' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <Tabs tabsData={tabs} />
      </div>
    );
  }
}

export default App;
