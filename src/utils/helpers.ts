import { Tab } from '../types/Tab';

export const findCorrectTab = (
  initTabs: Tab[],
  selectedId: string,
): Tab => {
  return initTabs.find(({ id }) => id === selectedId) || initTabs[0];
};
