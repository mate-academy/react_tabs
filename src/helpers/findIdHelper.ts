import { Tab } from '../types/Tabs';

export function findId(tabs: Tab[], selectedTabId: string): Tab {
  return tabs.find(({ id }) => id === selectedTabId) || tabs[0];
}
