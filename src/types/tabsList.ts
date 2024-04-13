import { type TabType } from './Tab';

export type Props = {
  tabs: TabType[];
  selectedTabId: string;
  onTabSelected: (tab: TabType) => void;
};
