import cn from 'classnames';
import { FC } from 'react';
import { Tab } from '../../types';
import { getTabById } from '../../helpers/getTabById';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (id: Tab) => void,
}

export const Tabs:FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  let currentSelectedTabId = selectedTabId;

  if (!getTabById(tabs, currentSelectedTabId)) {
    currentSelectedTabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = currentSelectedTabId === id;

            return (
              <li
                key={id}
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => !isSelected && onTabSelected(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabById(tabs, currentSelectedTabId)?.content}
      </div>
    </div>
  );
};
