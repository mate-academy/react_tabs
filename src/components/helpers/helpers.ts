import { Tab } from '../../types/Tab';

export const getCurrentTab = (tabs: Tab[], selectedTabId: string) =>
  tabs.find(tab => tab.id === selectedTabId) || tabs[0];
