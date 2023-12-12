import { Tab } from '../../types/Tab';
import { TabInfo } from '../Tab/TabInfo';

type Props = {
  tabs: Tab[],
};

export const TabsInfo = ({ tabs }:Props) => {
  return (
    <ul>
      {tabs.map(tab => <TabInfo key={tab.id} tab={tab} isActive />)}
    </ul>
  );
};
