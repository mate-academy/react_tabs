import { Tab } from '../types/Tabs';

export function findTabById(tabs: Tab[], selectedTabId: string): Tab {
  return tabs.find(({ id }) => id === selectedTabId) || tabs[0];
}
