export interface TabFromServer {
  id: string,
  title: string,
  content: string,
}

export type TabsType = {
  tabs: TabFromServer[],
  selectedTabId: string,
  onTabSelected: (id: string) => void,
};
