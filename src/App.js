import React from 'react';
import TitleButton from './component/TitleButton/TitleButton';
import TitleText from './component/TitleText/TitleText';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text  3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    tabs,
    isActiveTabId: 'tab-1',
  }

  getIdChoosedTitle = (id) => {
    this.setState({ isActiveTabId: id });
  }

  findActiveTab = (value) => {
    const selectedTab = tabs.find(tab => tab.id === this.state.isActiveTabId);

    return selectedTab[value];
  }

  render() {
    const { isActiveTabId } = this.state;

    return (
      <>
        <h1
          className="tabsHeader"
        >
          Tab selected
          {isActiveTabId}
        </h1>
        <ul className="tabsList">
          {this.state.tabs.map(tab => (
            <li
              key={tab.id}
            >
              <TitleButton
                id={tab.id}
                title={tab.title}
                getIdChoosedTitle={this.getIdChoosedTitle}
                isActiveTabId={isActiveTabId}
              />
            </li>
          ))}
        </ul>
        <TitleText
          title={this.findActiveTab('title')}
          content={this.findActiveTab('content')}
        />
      </>
    );
  }
}

export default App;
