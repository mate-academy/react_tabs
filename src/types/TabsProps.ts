import { Tab } from './Tab';

export interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onSelected: (tabId: string) => void;
}
