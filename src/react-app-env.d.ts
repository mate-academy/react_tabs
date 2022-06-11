/// <reference types="react-scripts" />

export interface Tab {
  id: string;
  title: string;
  content: string;
}

export type OnTabSelected = (tab: Tab) => void;

export type PrintContent = (tabId: string) => string | undefined;
