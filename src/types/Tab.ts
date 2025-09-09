export interface Tab {
  id: string;
  title: string;
  content: string;
}

export interface TabsProps {
  tabs: { id: string; title: string; content: string }[];
  selectedTabId: string;
  onTabSelected: (tab: { id: string; title: string; content: string }) => void;
}
