import React from 'react';
import './App.css';

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

const App = () => (
  <Tabs tabs={tabs} />
);

class Tabs extends React.Component {
  state = {
    activeTabIndex: 0,
  };

  changeIndex = (index) => {
    this.setState({ activeTabIndex: index });
  };

  render() {
    return (
      <div>
        {tabs.map((tab, index) => (
          <button
            type="button"
            className={
              `button${
                index === this.state.activeTabIndex
                  ? ' button_active' : ''}`
            }
            key={tab.title}
            onClick={() => this.changeIndex(index)}
          >
            {tab.title}
          </button>
        ))}
        <div
          className="content"
        >
          {tabs[this.state.activeTabIndex].content}
        </div>
      </div>
    );
  }
}

export default App;
