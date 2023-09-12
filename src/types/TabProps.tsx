import { Tab } from './Tab';

export type TabProps = {
  tabs:Tab[],
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};
