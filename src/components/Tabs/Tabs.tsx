import cn from 'classnames';
import { MouseEventHandler } from 'react';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[];
  selectedTabId: string | undefined;
  handleTabActivation: MouseEventHandler<HTMLAnchorElement>;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  handleTabActivation,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {selectedTab && tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn(
                { 'is-active': tab.id === selectedTabId },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                data-select={tab.id}
                onClick={handleTabActivation}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};
