import { Tab } from '../types';

export const getCurrentTab = (tabs:Tab[], selectedTabId:string) => {
  return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
};
