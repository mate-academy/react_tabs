import { FC } from 'react';
import classNames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === currentTab.id,
              })}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== currentTab.id) {
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
        {currentTab?.content}
      </div>
    </>
  );
};
