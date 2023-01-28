import { FC } from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="tabs is-toggle is-fullwidth">
      <ul>
        {tabs.map(tab => (
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
                if (tab.id !== selectedTab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {`Reason #${tab.id}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
