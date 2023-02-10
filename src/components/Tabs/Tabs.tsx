import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[];
  handleSelect: (tab: Tab) => void;
  selectedTab: Tab;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  handleSelect,
  selectedTab,
}) => {
  const handleClick = (tab: Tab) => {
    if (selectedTab.id === tab.id) {
      return;
    }

    handleSelect(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          <div data-cy="TabsComponent">
            <div className="tabs is-boxed">
              <ul>
                {tabs.map((tab: Tab) => {
                  const { id, title } = tab;

                  return (
                    <li
                      key={id}
                      className={classNames({
                        'is-active':
                          selectedTab.id === tab.id,
                      })}
                      data-cy="Tab"
                    >
                      <a
                        href={`#${id}`}
                        data-cy="TabLink"
                        onClick={() => {
                          handleClick(tab);
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
              {selectedTab.content}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
