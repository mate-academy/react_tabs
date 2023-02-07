import { SetSelectedTab } from '../../types/SetselectedTab';
import { Tab } from '../../types/Tab';
import { TabInfo } from '../TabInfo';

type Props = {
  tabs: Tab[];
  setSelectedTab:SetSelectedTab,
  selectedTab: Tab,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  setSelectedTab,
  selectedTab,
}) => {
  const { content, id } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo
              key={tab.id}
              tab={tab}
              setSelectedTab={setSelectedTab}
              activeId={id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
