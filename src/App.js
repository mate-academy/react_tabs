import React from 'react';
import { Button } from './Button';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    table: tabs[0],
  };

  tableSelection = event => (
    this.setState({
      table: tabs.find(tab => tab.id === event.target.id),
    })
  );

  render() {
    const { table } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${table.title}`}
        </h1>
        {tabs.map(tab => (
          <Button
            key={tab.id}
            id={tab.id}
            name={tab.title}
            onClick={this.tableSelection}
          />
        ))}
        <p>{table.content}</p>
      </div>
    );
  }
}

export default App;
