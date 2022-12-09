import classNames from 'classnames';

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
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === selectedTabId })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => {
                  if (event.currentTarget.hash.slice(1) === selectedTabId) {
                    return;
                  }

                  const currentTab = {
                    id: event.currentTarget.hash.slice(1),
                    title: event.currentTarget.textContent,
                    content: `Some text ${(event.currentTarget.textContent ?? '').replace(/^\D+/g, '')}`,
                  };

                  onTabSelected(currentTab);
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
    </div>
  );
};
