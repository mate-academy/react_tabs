import { Tab } from './Tab';

export interface TabsType {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (arg: Tab) => void,
}
