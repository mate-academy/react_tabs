import classNames from 'classnames';
import { FC } from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[],
  handleChangeTab: (event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: string) => void,
  selected: string
};

export const Tabs: FC<Props> = ({ tabs, handleChangeTab, selected }: Props) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          value={tab.id}
          data-cy="Tab"
          onClick={(event) => handleChangeTab(event, tab.id)}
          aria-hidden="true"
          className={classNames('',
            { 'is-active': tab.id === selected })}
        >
          <a href={tab.id} data-cy="TabLink">
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
