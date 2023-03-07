import React from 'react';
import { Tab } from '../../props/Tab';

type Props = {
  tab: Tab[],
  selectedTabId: string,
  onTabSelected:(tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tab,
  onTabSelected,
  selectedTabId,
}) => {
  const handleClick = (tabs: Tab) => {
    onTabSelected(tabs);
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tab.map(tabs => {
            const { id, title } = tabs;

            return (
              <li
                className={id === selectedTabId ? 'is-active' : ''}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tabs)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab.find(item => selectedTabId === item.id)?.content}
      </div>
    </>
  );
};
