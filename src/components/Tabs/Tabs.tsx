import classNames from 'classnames';

export type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTab: (tab: Tab) => void,
};

export const Tabs = ({ tabs, selectedTab, onTab }: Props) => {
  const content = tabs.find(
    tab => tab.id === selectedTab.id,
  )?.content || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': selectedTab.id === tab.id },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
