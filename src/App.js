import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs';

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

export class App extends React.Component {
  state = {
    activeTitleId: 0,
  }

  handleChange = (titleId) => {
    this.setState({
      activeTitleId: titleId,
    });
  }

  render() {
    const { activeTitleId } = this.state;

    return (
      <>
        <h1>React tabs</h1>

        <Tabs
          tabs={tabs}
          handleChange={this.handleChange}
        />

        <div className="content">
          {tabs[activeTitleId].content}
        </div>
      </>
    );
  }
}
