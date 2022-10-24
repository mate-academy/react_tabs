import classNames from 'classnames';
import { FC } from 'react';

interface Props {
  tabs: { id: string; title: string; content: string; }[],
  selectTabId: (tabId: string) => string,
  selectedTabId: string,
}

export const Tabs: FC<Props> = (props) => {
  const { tabs, selectedTabId, selectTabId } = props;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                { 'is-active': tab.id === selectedTabId },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectTabId(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </>
  );
};
