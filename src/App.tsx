import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe? Eos eaque maxime fugit fugiat accusamus hic, sit libero magni. Magnam alias placeat obcaecati nobis nemo ad facilis quidem? Maiores.' },
];

const App: React.FC = () => {
  const [isSelected, setIsSelected] = useState('Tab 1');

  function changeActive(title:string) {
    setIsSelected(title);
  }

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {isSelected}
      </h1>
      <Tabs
        isSelected={isSelected}
        tabs={tabs}
        activeTab={(title:string) => {
          changeActive(title);
        }}
      />
    </div>
  );
};

export default App;
