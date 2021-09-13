import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  changeTab: (newSelectedTab: Tab) => void;
};

export const Tabs:React.FC<Props> = (props) => {
  const { tabs, selectedTabId, changeTab } = props;

  return (
    <article>
      <ul className="tabs">
        {tabs.map(tab => {
          const { id, title } = tab;

          return (
            <li
              key={id}
              className={classNames('tabs__item', { tabs__item_active: selectedTabId === id })}
            >
              <button
                type="button"
                className="tabs__button"
                onClick={() => {
                  if (selectedTabId !== id) {
                    changeTab(tab);
                  }
                }}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </article>
  );
};
