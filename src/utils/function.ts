import Tab from '../types/Tab';

export function findSelectedTab(id: string, arr: Tab[]): Tab {
  return arr.find(tab => tab.id === id) || arr[0];
}

export default Tab;
