import React from 'react';
import './App.scss';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Home', content: 'Lorem ipsum dolor sit amet' },
      { title: 'Profile', content: 'Accusamus animi dignissimos facere!' },
      { title: 'Contact', content: 'Doloribus earum in magni provident.' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <Tabs tabsArr={tabs} />
      </div>
    );
  }
}

export default App;
