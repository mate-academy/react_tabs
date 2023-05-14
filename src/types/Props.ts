import { Tab } from './Tab';

export interface Props {
  tabs: Tab[]
  selectedTabId: string
  onTabSelected: (tab: Tab) => void,
}
