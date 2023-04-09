import { Tab } from '../types/Tab';

export const getTabById = (tabs: Tab[], id: string) => {
  return tabs
    .find(tab => tab.id === id) || tabs[0];
};
