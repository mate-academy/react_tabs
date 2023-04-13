import { Tab } from './types/types';

export const getSelectedTab = (
  tabs: Tab[],
  selectedId: string,
): Tab => {
  return tabs.find(tab => tab.id === selectedId) || tabs[0];
};
