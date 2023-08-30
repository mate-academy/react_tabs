export interface TabInfo {
  id: string;
  title: string;
  content: string;
}

export type TabsProps = {
  tabs: TabInfo[];
  activeTabId: string,
  setActiveTabId: (tabId: string) => void,
};
