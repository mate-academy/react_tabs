import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../Type/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onClick: React.MouseEventHandler<HTMLAnchorElement>,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onClick,
}) => {
  const selectedTabContent = tabs.find(
    tab => selectedTabId === tab.id,
  )?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            let isSelected = false;

            if (tab.id === selectedTabId) {
              isSelected = true;
            }

            return (
              <li
                className={classNames(
                  {
                    'is-active': isSelected,
                  },
                )}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={(event) => {
                    if (!isSelected) {
                      onClick(event);
                    }
                  }}
                >
                  { tab.title }
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        { selectedTabContent }
      </div>
    </div>
  );
};
