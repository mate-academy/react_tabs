import { Dispatch, SetStateAction } from 'react';

type Props = {
  tabs: Tabs[],
  onTabSelected: Dispatch<SetStateAction<string>>,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={selectedTab.id === tab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => (
                  selectedTabId !== tab.id && (
                    onTabSelected(tab.id)
                  )
                )}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab?.content}
      </div>
    </>
  );
};
