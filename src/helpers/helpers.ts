import { Tab } from '../types/Tab';

export function findId(tabs: Tab[], selectedTabId: string): Tab {
  return tabs.find(({ id }) => id === selectedTabId) || tabs[0];
}
