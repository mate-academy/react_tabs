import { Tab } from '../Tab/Tab';
import { TabsProps } from '../../utils/types';

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTabId,
  setActiveTabId,
}) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={activeTabId === tab.id}
            setActiveTabId={setActiveTabId}
          />
        ))}
      </ul>
    </div>
  );
};
