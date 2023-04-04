import { Tab } from './components/Tabs/Types/Tab';

export const getSelectedTabById = (tabs: Tab[], selectedTabId: string): Tab => {
  return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
};
