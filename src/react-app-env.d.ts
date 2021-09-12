/// <reference types="react-scripts" />

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface State {
  tabsCopy: Tab[];
  selectedTab: string;
}
