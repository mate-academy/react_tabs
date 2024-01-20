import { Tab } from './types/Tab';

export function getSelectedTab(tabs: Tab[], selectedTabId: string): Tab {
  return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
}
