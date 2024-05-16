import { Tab } from './Tab';

export interface TabsType {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}
