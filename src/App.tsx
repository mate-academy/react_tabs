/* eslint-disable max-len */
import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 'tab-2', title: 'Profile', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' },
  { id: 'tab-3', title: 'Contact', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="App">
      <h1>
        Selected tab:
        {' '}
        {selectedTab.title}
      </h1>

      <Tabs
        allTabs={tabs}
        tabSelected={selectedTab}
        onTabSelected={setSelectedTab}
      />
    </div>
  );
};

export default App;
