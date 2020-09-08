/* eslint-disable max-len */
import React from 'react';
import Tabs from './Tabs';
import './App.scss';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Kiev',
    content: 'Kiev is the capital and most populous city of Ukraine. It is in north-central Ukraine along the Dnieper River. Its population in July 2015 was 2,887,974 (though higher estimated numbers have been cited in the press),making Kiev the seventh-most populous city in Europe.',
  },
  {
    title: 'Lviv',
    content: 'Lviv is the largest city in western Ukraine and the seventh-largest city in the country overall, with a population of 755 800 as of 2020. Lviv is one of the main cultural centres of Ukraine.',
  },
  {
    title: 'Odessa',
    content: 'Odessa is the third most populous city of Ukraine and a major tourism center, seaport and transport hub located on the northwestern shore of the Black Sea. It is also the administrative center of the Odessa Oblast and a multiethnic cultural center. Odessa is sometimes called the "pearl of the Black Sea", the "South Capital", and "Southern Palmyra".',
  },
];

class App extends React.Component {
  state = {
    activeTabId: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      activeTabId: index,
    });
  }

  render() {
    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          activeTabId={this.state.activeTabId}
          onTabSelected={this.onTabSelected}
          content={this.state.content}
        />
      </div>
    );
  }
}

export default App;
