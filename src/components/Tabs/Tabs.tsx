import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: Tab[]
  selectedTab: Tab
  setSelectedTab: (tab: Tab) => void
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                key={tab.id}
                className={classNames(
                  'Tab',
                  {
                    'is-active': tab === selectedTab,
                  },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    setSelectedTab(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
