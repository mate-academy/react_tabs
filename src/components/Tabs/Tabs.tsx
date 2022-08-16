import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { InterfaceTabs } from '../../types/InterfaceTabs';

interface Props extends InterfaceTabs {
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
}

export const Tabs: FC<Props> = (props) => {
  const { tabs, onTabSelected, selectedTabId } = props;
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === selectedTab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
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

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </>
  );
};
