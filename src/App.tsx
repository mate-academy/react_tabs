import { FC, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Tab = {
  id: string;
  title: string;
  content: string;
};

export const App: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleChangeTab = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    setSelectedTabId(id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is Tab ${selectedTabId.slice(-1)}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            handleChangeTab={handleChangeTab}
            selectedTab={selectedTabId}
          />
        </div>

        <div className="block" data-cy="TabContent">
          { tabs[Number(selectedTabId.slice(-1)) - 1].content }
        </div>
      </div>
    </div>
  );
};
