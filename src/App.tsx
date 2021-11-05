/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type TabsProps = {
  tabs: Tab[],
  selectedTabId: string,
  onSelect: any,
};

const Tabs = (props: TabsProps) => {
  return (
    <>
      {tabs.map(tab => (
        <>
          <button
            type="button"
            key={tab.id}
            name={tab.id}
            onClick={props.onSelect}
          >
            {tab.title}
          </button>
        </>
      ))}
    </>
  );
};

type AppState = {
  selectedTabId: string,
};

class App extends React.Component<{}, AppState> {
  state = {
    selectedTabId: '0',
  };

  render() {
    const { selectedTabId } = this.state;
    const tabContent = tabs.find(tab => tab.id === selectedTabId)?.content;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTabId}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onSelect={(event: any) => {
            this.setState({ selectedTabId: event.target.name });
          }}
        />

        <p>
          {tabContent}
        </p>

      </div>
    );
  }
}

export default App;
