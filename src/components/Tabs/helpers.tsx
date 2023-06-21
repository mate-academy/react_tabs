import { Tab } from '../types/types';

export const getTabById = (tabs: Tab[], tabId: string): Tab => (
  tabs.find(tab => tab.id === tabId) || tabs[0]
);
