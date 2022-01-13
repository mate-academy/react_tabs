import React from 'react';
import { Tabs } from './Components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  {
    id: 'tab-1',
    title: 'Home',
    content: `A home page (or homepage) is the main web page of a website. The term also refers to one or more pages always shown in a web browser when the application starts up. In this case, it is also known as the start page or startup page.
    The word "home" comes from the use of the Home key on a keyboard to return to the start page at any time.`,
  },
  {
    id: 'tab-2',
    title: 'Profile',
    content: 'Interface and product catalog language will be switched automatically to the language user has selected in user profile page. You can find the date when you became a member in your profile page.',
  },
  {
    id: 'tab-3',
    title: 'Contact',
    content: `Far too many website designers put contact pages near the bottom of their priority list in terms of copywriting and design. It’s no wonder that many contact pages look like they were built in the 1990s, while the rest of the website is beautiful and updated.

    That, my friends, is a huge mistake. Your Contact Us page is one of the most valuable pages on your website. And for most companies, it's typically one of the most-visited site pages.`,
  },
];

export default class App extends React.Component {
  state = {
    selectedTab: tabs[0],
    usedTabs: tabs,
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab, usedTabs } = this.state;

    return (
      <div className="App">
        <h1>
          {this.state.selectedTab.title}
        </h1>
        <div>
          <Tabs
            usedTabs={usedTabs}
            selectedTabId={selectedTab.id}
            onTabSelected={this.onTabSelected}
          />
        </div>
      </div>
    );
  }
}
