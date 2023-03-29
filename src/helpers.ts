import { Tab } from './types/Tab';

export const getTabById = (tabs: Tab[], selectedTabId: string): Tab => {
  return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
};
