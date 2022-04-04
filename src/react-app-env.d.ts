/// <reference types="react-scripts" />

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
};

interface Tab {
  id: string;
  title: string;
  content: string;
}
