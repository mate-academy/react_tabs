import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (id: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tabHandler = useCallback((tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  }, [selectedTabId]);

  const selectedTab = useMemo(
    () => (
      tabs.find((tab) => (tab.id === selectedTabId)) || tabs[0]
    ),
    [selectedTabId, tabs],
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': selectedTab.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tabHandler(tab)}
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
  );
};
