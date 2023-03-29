import { Tab } from './types.ts/Tab';

export function findTab(tabs: Tab[], selectedTabId: string): Tab {
  return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
}
