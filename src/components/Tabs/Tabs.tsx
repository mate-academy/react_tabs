import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[]
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  const handleClick = (tab: Tab) => {
    onTabSelected(tab);
  };

  const getCurrentTab = (data: Tab[], id: string) => {
    return data.find(el => el.id === id);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={tab.id === selectedTabId
                  ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getCurrentTab(tabs, selectedTabId)?.content}
      </div>
    </div>
  );
};
