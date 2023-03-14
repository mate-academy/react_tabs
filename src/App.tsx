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
  const [selectedTabId, setselectedTabId] = useState('tab-1');

  const handleChangeTab = (event: React.MouseEvent, id: string) => {
    event.preventDefault();
    setselectedTabId(id);
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
            selected={selectedTabId}
          />
        </div>

        <div className="block" data-cy="TabContent">
          {`Some text ${selectedTabId.slice(-1)}`}
        </div>
      </div>
    </div>
  );
};
