export interface Tab {
  id: string,
  title: string,
  content: string,
}

export type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};
