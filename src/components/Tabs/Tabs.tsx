import classNames from 'classnames';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (objTab: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  { tabs, selectedTabId, onTabSelected },
) => {
  return (
    <>
      <h1 className="title">
        {tabs.map(tab => (
          tab.id === selectedTabId && `Selected tab is ${tab.title}`
        ))}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
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
                  onClick={() => onTabSelected(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.map(tab => (
            tab.id === selectedTabId && tab.content
          ))}
        </div>
      </div>
    </>
  );
};
