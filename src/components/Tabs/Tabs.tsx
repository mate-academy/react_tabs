import { FC, MouseEvent } from 'react';
import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  handleTabSelection: (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => void;
}

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  handleTabSelection,
}) => (
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
              // eslint-disable-next-line max-len
              onClick={(event) => handleTabSelection(event, tab.id)}
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
