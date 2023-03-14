import classNames from 'classnames';
import { FC } from 'react';
import { TabsType } from '../../Types/Types';

export const Tabs: FC<TabsType> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => (
          <li
            key={id}
            data-cy="Tab"
            className={classNames({ 'is-active': selectedTabId === id })}
          >
            <a
              href={`#${id}`}
              data-id={id}
              data-cy="TabLink"
              onClick={({ currentTarget }) => {
                onTabSelected(currentTarget.dataset.id ?? 'tab-1');
              }}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
