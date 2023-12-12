export interface Tab {
  id: string,
  title: string,
  content: string,
}

export type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelect: (tab: Tab) => void;
};
