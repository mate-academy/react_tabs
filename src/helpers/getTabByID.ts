import { Tab } from '../types/tab';

export const getTabByID = (tabs: Tab[], tabId: string) => {
  return tabs.find(tab => tab.id === tabId) || tabs[0];
};
