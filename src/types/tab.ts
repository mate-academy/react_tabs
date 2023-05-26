import { Dispatch, SetStateAction } from 'react';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

export interface TabsProps {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: Dispatch<SetStateAction<Tab>>;
}
