import { FC, useState } from 'react';
import classNames from 'classnames';
import { Tab } from './types/interface';

interface Props {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  let currentTab = tabs.find(({ id }) => id === selectedTabId);

  if (!currentTab) {
    const [tab] = tabs;

    currentTab = tab;
  }

  const [text, setText] = useState(currentTab.content);
  const choseTab = (tab: Tab) => {
    const { content, id } = tab;

    setText(content);

    if (id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={classNames({
                  'is-active': id === currentTab?.id,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => choseTab(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {text}
      </div>
    </div>
  );
};
