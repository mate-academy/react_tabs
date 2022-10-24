import { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  handleTabSelection: MouseEventHandler<HTMLAnchorElement>;
}

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  handleTabSelection,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={handleTabSelection}
                id={tab.id}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === selectedTabId)?.content || 'No content'}
      </div>
    </div>
  );
};
