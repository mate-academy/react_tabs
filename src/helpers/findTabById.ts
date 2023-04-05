import { Tab } from '../types/Tab';

export function findTabById(tabs: Tab[], id: string): Tab {
  return tabs.find(tab => tab.id === id) || tabs[0];
}
