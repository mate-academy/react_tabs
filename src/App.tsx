import React from 'react';
import classNames from 'classnames';
// import { render } from 'react-dom';
// import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};
type State = {
  copyTabs: Tab[];
  selectedTab: string;
  contentOfSelectedTab: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    copyTabs: [...tabs],
    selectedTab: 'Tab 1',
    contentOfSelectedTab: 'Some text 1',
  };

  render() {
    const { copyTabs, selectedTab, contentOfSelectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="selected-tab">{`Selected tab is ${selectedTab}`}</h1>
        <ul className="nav">
          {copyTabs.map(tab => (
            <div>
              <button
                type="button"
                key={tab.id}
                className="nav__item"
                onClick={() => {
                  this.setState({
                    selectedTab: `${tab.title}`,
                    contentOfSelectedTab: `${tab.content}`,
                  });
                }}
              >
                {tab.title}
              </button>
              <span
                className={
                  classNames(
                    'content-hidden',
                    { 'content-visible': contentOfSelectedTab === tab.content },
                  )
                }
              >
                {tab.content}
              </span>
            </div>
          ))}
        </ul>
        {/* <Tabs copyTabs={[...tabs]} /> */}
      </div>
    );
  }
}

export default App;

// &nbsp;
