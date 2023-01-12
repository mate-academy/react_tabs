import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  selectedOnTab: (tab: Tab) | null,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  selectedOnTab,
}) => {
  //
};
