/// <reference types="react-scripts" />

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface OnTabSelected {
  (tabId: string): void;
}
