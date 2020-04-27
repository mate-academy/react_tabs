import React from 'react';
import './App.css';
import Tabs from './component/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    id: 0,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 1,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 2,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    active: 0,
  }

  setActiveTab = tabId => this.setState(() => ({
    active: tabId,
  }))

  render = () => (
    <div>
      <Tabs tabs={tabs} clickHandler={this.setActiveTab} />
      {
        tabs[this.state.active] && (
          <section className="content">
            {tabs[this.state.active].content}
          </section>
        )
      }
    </div>
  );
}

export default App;
