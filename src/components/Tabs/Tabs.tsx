import classNames from 'classnames';
import { useEffect, useState } from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: CallableFunction;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const onTabClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (event.currentTarget.hash.slice(1) === selectedTabId) {
      return;
    }

    const currentTab = {
      id: event.currentTarget.hash.slice(1),
      title: event.currentTarget.textContent,
      content: `Some text ${(event.currentTarget.textContent ?? '').replace(/^\D+/g, '')}`,
    };

    onTabSelected(currentTab);
  };

  const [activeTab, setActiveTab] = useState(tabs[0].content);
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  useEffect(() => {
    const isActiveTab = tabs.find(tab => tab.id === selectedTabId)?.content
      || tabs[0].content;
    const isActiveTabId = tabs.find(tab => tab.id === selectedTabId)?.id
      || tabs[0].id;

    setActiveTab(isActiveTab);
    setActiveTabId(isActiveTabId);
  }, [selectedTabId]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === activeTabId,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={onTabClick}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab}
      </div>
    </div>
  );
};
