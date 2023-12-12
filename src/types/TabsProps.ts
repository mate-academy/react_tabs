import { TabType } from './TabType';

export type TabsProps = {
  tabs: TabType[],
  selectedTabId: string,
  onTabSelected: (tab: TabType) => void,
};
