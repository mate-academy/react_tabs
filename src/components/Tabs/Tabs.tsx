import classNames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const chosenTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={classNames({
                  'is-active': chosenTab.id === tab.id,
                })}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={(event) => {
                    event.preventDefault();

                    if (tab.id !== selectedTabId) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="block" data-cy="tab-content">
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </div>
      </div>
    </>
  );
};
