import classNames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs = (props: TabsProps) => {
  const {
    tabs, selectedTabId, onTabSelected,
  } = props;

  const findSelectedTab = (id: string) => {
    return tabs.find(tab => tab.id === id);
  };

  const selectedTab = findSelectedTab(selectedTabId) || tabs[0];

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => {
          const isSelected = selectedTab.id === tab.id;

          return (
            <>
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames({
                  'is-active': isSelected,
                })}
              >
                <a
                  onClick={() => tab.id !== selectedTabId && onTabSelected(tab)}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}

                </a>
              </li>

              {isSelected
                && (
                  <div className="block" data-cy="TabContent">
                    {selectedTab.content}
                  </div>
                )}
            </>
          );
        })}
      </ul>
    </div>
  );
};
