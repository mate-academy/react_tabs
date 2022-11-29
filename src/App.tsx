import {
  FC,
  useCallback,
  useMemo,
  useState,
} from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import tabs from './api/tabs';
import { Tab } from './typedefs';

export const App: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const selectedTab = useMemo(
    () => tabs.find(tab => selectedTabId === tab.id) || tabs[0],
    [selectedTabId],
  );

  const onTabSelected = useCallback(
    (tab: Tab) => {
      setSelectedTabId(tab.id);
    }, [selectedTabId],
  );

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
