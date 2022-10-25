import classNames from 'classnames';
import { FC } from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: { id: string; title: string; content: string; }[],
  selectedTabId: string,
  onTabSelected: (tabId: Tab) => string,
}

export const Tabs: FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;
  const isTypeId = tabs.some(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                {
                  'is-active': tab.id === selectedTabId
                  || (!isTypeId && index === 0),
                },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
                  }
                }}
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
