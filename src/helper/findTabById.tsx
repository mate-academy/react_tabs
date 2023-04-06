import { Tab } from '../types/Tab';

export const findTabById = (tabs: Tab[], tabId: string) => {
  const foundTab = tabs.find(tab => tab.id === tabId);

  return foundTab || tabs[0];
};
