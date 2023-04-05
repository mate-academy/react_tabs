import { Tab } from './components/Tabs/Types/Tab';

export const getSelectedTabById = (
  tabs: Tab[],
  selectedTabId: string,
): Tab => (
  tabs.find(tab => tab.id === selectedTabId) || tabs[0]
);
