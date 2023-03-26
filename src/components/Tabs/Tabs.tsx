import classNames from 'classnames';

export interface Tab {
  id: string,
  title: string,
  content: string
}

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string
  setSelectedTabId: (selectedTabId:string) => void;
}

export const Tabs = ({ tabs, selectedTabId, setSelectedTabId }: TabsProps) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                selectedTabId === tab.id ? 'is-active' : '',
              )}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href={`#tab-${selectedTabId}}`}
                data-cy="TabLink"
                onClick={() => setSelectedTabId(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
