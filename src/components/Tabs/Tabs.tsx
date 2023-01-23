import classNames from 'classnames';

export interface TabsType {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: TabsType[],
  onTabSelected: (tab: TabsType) => void,
  selectedTabId: string,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,

}) => {
  const selectedTab: TabsType = tabs
    .find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="section">

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': selectedTab === tab,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (selectedTabId !== tab.id) {
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

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
