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
  setTabId: (string: string) => void;
  selectedTabId: string;
  tabs: Tab[];
}

export const Tabs: FC<Prop> = ({
  setTabId,
  selectedTabId,
  tabs,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ title, id }) => (
            <li
              className={classNames(
                { 'is-active': selectedTabId === id },
              )}
              data-cy="Tab"
              key={id}
            >
              <a
                data-cy="TabLink"
                href={`#${id}`}
                onClick={() => {
                  setTabId(id);
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(({ id, content }) => selectedTabId === id && content)}
      </div>
    </div>
  );
};
