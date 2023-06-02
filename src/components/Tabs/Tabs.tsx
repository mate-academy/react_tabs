import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
  selectedTab: Tab;
  setSelectedTabId: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs, setSelectedTabId, selectedTab,
}) => {
  const onTabSelected = (tab: Tab) => {
    if (selectedTab.id !== tab.id) {
      setSelectedTabId(tab);
    }
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={selectedTab.id === tab.id
                    ? 'is-active'
                    : ''}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => onTabSelected(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="tab-content">
          {selectedTab.title}
        </div>
      </div>

    </>

  );
};
