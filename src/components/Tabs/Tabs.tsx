import classNames from 'classnames';

export type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
};

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: Props) => {
  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab: Tab) => (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': tab.id === selectedTab.id,
                })}
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

        <div
          className="block"
          data-cy="TabContent"
        >
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
