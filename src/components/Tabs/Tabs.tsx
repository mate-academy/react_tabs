import classNames from 'classnames';
import Tab from '../../types/tabs';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  changeSelectedTab: React.Dispatch<React.SetStateAction<Tab>>;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  changeSelectedTab,
}) => {
  const {
    id: selectedTabId,
    content: selectedTabContent,
  } = selectedTab;

  const onTabSelected = (currentTab: Tab) => {
    const targetTab = tabs.find(tab => tab === currentTab);

    if (targetTab !== undefined) {
      changeSelectedTab(targetTab);
    }
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames(
                  { 'is-active': tab.id === selectedTabId },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (selectedTab !== tab) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </>
  );
};
