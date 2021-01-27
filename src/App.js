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

class App extends React.Component {
  state = {
    activeTitle: 'Tab 1',
  }

  changeHandler = (title) => {
    this.setState({ activeTitle: title });
  }

  render() {
    const { activeTitle } = this.state;
    const activeText = tabs.find(el => el.title === activeTitle);

    return (
      <div>
        <Tabs tabs={tabs} onChange={this.changeHandler} />

        <p>
          {activeText.content}
        </p>
      </div>
    );
  }
}

export default App;
