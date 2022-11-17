export interface Tab {
  id: string,
  title: string,
  content: string,
}

export type OnTabSelected = (tab: Tab) => void;
