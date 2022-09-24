import classNames from 'classnames';
import {
  FC,
} from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Prop {
  selectedTab: Tab;
  setTabId: (string: string) => void;
  selectedTabId: string;
  tabs: Tab[];
}

export const Tabs: FC<Prop> = ({
  selectedTab,
  setTabId,
  selectedTabId,
  tabs,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': selectedTabId === tab.id },
              )}
              data-cy="Tab"
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => {
                  setTabId(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
