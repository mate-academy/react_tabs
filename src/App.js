import React from 'react';
import './App.css';
import { TabList } from './components/TabList';

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

const tabsWithId = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

class App extends React.Component {
  state = {
    active: 0,
  };

  toggle = id => this.setState(() => ({
    active: id,
  }));

  render = () => (
    <div>
      <TabList
        active={this.state.active}
        tabs={tabsWithId}
        toggle={this.toggle}
      />
      <section className="tab__body">
        {tabsWithId[this.state.active].content}
      </section>
    </div>
  );
}

export default App;
