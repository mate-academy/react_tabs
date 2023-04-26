import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const findTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isActive = selectedTabId === id;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={classNames({ 'is-active': isActive })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`${findTab?.content}`}
      </div>
    </div>
  );
};
