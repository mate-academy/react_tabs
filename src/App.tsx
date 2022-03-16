import { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Statistic', content: 'Ежегодно люди на Земле покупают шоколад примерно на сумму в семь миллиардов долларов США.' },
  { id: 'tab-2', title: 'Legend', content: 'Когда-то давно, существовал прекрасный сад, окутанный временем. В этом саду жили боги, а хранителями сада были первые люди, мужчина и женщина. Они обрабатывали землю и жили в гормонии со всеми стихиями — землей, водой и воздухом.' },
  { id: 'tab-3', title: 'Fact', content: 'Впервые твёрдый шоколад был получен в 19-м веке. До этого момента он был только жидким.' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="App">
      <h1>
        Selected tab is
        {' '}
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={setSelectedTab}
      />
    </div>
  );
};

export default App;
