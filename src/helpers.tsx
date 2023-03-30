import { Tab } from './types/Tab';

export const getTabById = (tabs: Tab[], tabId: string) => {
  return tabs.find((tab: Tab) => tab.id === tabId) || tabs[0];
};
