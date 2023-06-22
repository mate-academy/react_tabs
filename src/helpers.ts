import { Tab } from './types';

export const findTabById = (tabsList: Tab[], tabId: string) => {
  return tabsList.find(tab => tabId === tab.id);
};
