import { Tab } from './Types/Tab';

export const findTab = (tabs: Tab[], selectedTabId: string): Tab => {
  return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
};
