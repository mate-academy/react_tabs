export type Tab = {
  id: string;
  title: string;
  content: string;
};

export type TabsProps = {
  selectedTabId: string;
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
};
