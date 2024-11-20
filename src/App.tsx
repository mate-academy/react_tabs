import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App1: React.FC = () => {
  return (
    <div className="section">
      <h1 className="title">Selected tab is Tab 1</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <li className="is-active" data-cy="Tab">
              <a href="#tab-1" data-cy="TabLink">
                Tab 1
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-2" data-cy="TabLink">
                Tab 2
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-3" data-cy="TabLink">
                Tab 3
              </a>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          Some text 1
        </div>
      </div>
    </div>
  );
};

type State = {
  selectedTabId: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedTabId: tabs[0].id,
  };

  selectTab = (selectedId: string) => {
    this.setState({ selectedTabId: selectedId });
  };

  render() {
    const selectedTab = tabs.find(tab => tab.id === this.state.selectedTabId)
      || tabs[0];

    return (
      <div className="section">
        <h1 className="title">
          {`Selected tab is ${selectedTab.title}`}
        </h1>

        <Tabs
          tabs={tabs}
          activeTabId={this.state.selectedTabId}
          onTabSelected={this.selectTab}
        />
      </div>
    );
  }
}
