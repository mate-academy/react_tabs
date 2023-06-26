import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  handleTab: Dispatch<SetStateAction<Tab>>,
  selectedTab: Tab,
};

export const Tabs = ({
  tabs,
  handleTab,
  selectedTab,
}: Props) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={
            cn(
              { 'is-active': selectedTab.id === tab.id },
            )
          }
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              handleTab(tab);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}

    </ul>
  );
};
