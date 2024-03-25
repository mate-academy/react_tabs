export type Tab = {
  id: string;
  title: string;
};

export type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};
