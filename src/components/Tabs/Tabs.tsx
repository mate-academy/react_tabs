import { Tab, TabsProps } from '../types';

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const handleTabClick = (tab: Tab, event: React.MouseEvent) => {
    event.preventDefault();
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const validSelectedTabId = tabs.some((tab) => tab.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.id === validSelectedTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(e) => handleTabClick(tab, e)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === validSelectedTabId)?.content}
      </div>
    </div>
  );
};
