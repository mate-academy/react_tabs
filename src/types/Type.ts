export interface Tab {
  id: string,
  title: string,
  content: string,
}

export type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void,
};

export type State = {
  tabs: Tab[],
  selectedTabId: string,
};
