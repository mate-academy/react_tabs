import { Tab } from '../types/Tab';

export function getInfoFromTab(
  id: string,
  key: keyof Tab,
  tabs: Tab[],
): string | undefined {
  const foundTab = tabs.find(tab => tab.id === id);

  if (foundTab) {
    return foundTab[key];
  }

  return undefined;
}
