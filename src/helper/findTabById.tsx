import { Tab } from '../types/Tab';

export const findTabById = (tabs: Tab[], tabId: string) => {
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return selectedTab || tabs[0];
};
