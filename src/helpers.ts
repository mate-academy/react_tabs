// eslint-disable-next-line import/no-cycle
import { Tab } from './components/Tabs';

export const findTabById = (tabsList: Tab[], tabId: string) => {
  return tabsList.find(tab => tabId === tab.id);
};
