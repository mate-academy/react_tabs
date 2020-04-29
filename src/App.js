import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    active: tabs[0].content,
  };

  setActiveTabs = content => () => this.setState({
    active: content,
  });

  render = () => (
    <>
      <Tabs tabs={tabs} clickHandler={this.setActiveTabs} />
      <p>
        {this.state.active}
      </p>
    </>
  );
}

export default App;
