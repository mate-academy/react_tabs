import { Tab } from './types/Tab';

export const findVisibleTab = (
  givenTabs: Tab[],
  selectedTabId: string,
) => (
  givenTabs.find(tab => tab.id === selectedTabId) || givenTabs[0]
);
