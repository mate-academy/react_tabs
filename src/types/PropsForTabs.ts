import { TabType } from './TabType';

export interface PropsForTabs {
  tabs: TabType[],
  onTabSelected: (tabsItem: Tab) => void,
  selectedTabId: string
}
