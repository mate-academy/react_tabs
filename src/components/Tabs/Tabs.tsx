import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected(tab: Tab): void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const checkedSelectedTabId = tabs.some(({ id }) => id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  let contentToShow;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title, content } = tab;
            const isSelected = checkedSelectedTabId === id;

            if (isSelected) {
              contentToShow = content;
            }

            return (
              <li
                key={id}
                className={classNames(
                  { 'is-active': isSelected },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={(event) => {
                    event.preventDefault();

                    if (!isSelected) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {contentToShow}
      </div>
    </div>
  );
};
