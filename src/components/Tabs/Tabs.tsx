import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tabId: string) => void;
  getKeyOfTab: (tabId: string, key: keyof Tab) => string | undefined;
}

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  getKeyOfTab,
}: Props) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getKeyOfTab(selectedTabId, 'content')}
      </div>
    </div>
  );
};
