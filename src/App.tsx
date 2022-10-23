import { Component } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './Type/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  copyTabs: Tab[],
  selectedId: string,
};

export class App extends Component {
  state: Readonly<State> = {
    copyTabs: tabs,
    selectedId: tabs[0].id,
  };

  setTab = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const element = event.target as HTMLAnchorElement;

    this.setState({
      selectedId: element.getAttribute('href')?.slice(1),
    });
  };

  render() {
    const { copyTabs, selectedId } = this.state;
    const selectedTabTitle = copyTabs.find(
      tab => tab.id === selectedId,
    )?.title;

    return (
      <div className="section">
        <h1 className="title">
          Selected tab is
          {' '}
          { selectedTabTitle }
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedId}
          onClick={this.setTab}
        />
      </div>
    );
  }
}
