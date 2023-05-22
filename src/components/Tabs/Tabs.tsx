import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  handleContent: Dispatch<SetStateAction<string>>,
  handleTile: Dispatch<SetStateAction<string>>,
  selectedTab: string,
};

export const Tabs = ({
  tabs,
  handleContent,
  handleTile,
  selectedTab,
}: Props) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={
            cn(
              { 'is-active': selectedTab.trim() === tab.title },
            )
          }
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              handleContent(tab.content);
              handleTile(` ${tab.title}`);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}

    </ul>
  );
};
