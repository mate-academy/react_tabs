import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selected: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<Props> = ({
  tabs,
  selected,
  onTabSelected,
}) => (
  <div
    className="tabs is-boxed"
    data-cy="tab-content"
  >
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames({ 'is-active': selected === tab.id })}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
