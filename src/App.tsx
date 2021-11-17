import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  {
    id: 'tab-1',
    title: 'Over the rainbow',
    content: 'Somewhere over the rainbow, way up high, and the dreams that you dream of, once in a lullaby, oh...',
  },

  {
    id: 'tab-2',
    title: 'Sunshine reggae',
    content: 'Gimme just a little smile Thats all I ask of you Gimme gimme Gimme just a little smile We got a message for you...',
  },

  {
    id: 'tab-3',
    title: 'Paradise city',
    content: 'Take me down to the paradise city, where the grass is green and the girls are pretty, oh wont you please take ne home...',
  },
];

interface Tab {
  id: string,
  title: string,
  content: string,
}

class App extends React.Component {
  state = {
    activeTab: tabs[0],
  };

  tabSelected = (tab: Tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <h1 className="tabs__header">{`Selected tab is: ${activeTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          content={activeTab.content}
          tabId={activeTab.id}
          onSelect={this.tabSelected}
        />
      </div>
    );
  }
}

export default App;
