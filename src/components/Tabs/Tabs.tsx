import { FC } from 'react';
import { Tab } from '../../Types/Types';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tabId: string) => void;
}

export const Tabs:FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(({ id, title }) => (
              <li
                key={id}
                data-cy="Tab"
                //eslint-disable-next-line max-len
                className={classNames({ 'is-active': id === selectedTabId })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(id)}
                >
                  {title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
