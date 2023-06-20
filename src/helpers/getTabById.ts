import { Tab } from '../types';

export const getTabById = (
  tabsList: Tab[],
  id: string,
) => (
  tabsList.find(tab => tab.id === id)
);
