import React from 'react';
import classNames from 'classnames';

interface Tab {
  id:string;
  title:string;
  content:string;
}

type TabsProps = {
  tab:Tab;
  btn:string;
  setIsBtn:React.Dispatch<React.SetStateAction<string>>;
};

export const Tabs: React.FC<TabsProps> = ({ tab, btn, setIsBtn }) => {
  return (
    <li
      data-cy="Tab"
      className={
        classNames(
          { 'is-active': btn === tab.title },
        )
      }
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => setIsBtn(tab.title)}
      >
        {tab.title}
      </a>
    </li>
  );
};
