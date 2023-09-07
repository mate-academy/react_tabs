import { TabsProps, Tab } from '../../types';

export const Tabs: React.FC<TabsProps> = ({
  selectedTabId,
  tabs,
  onTabSelected,
}) => {
  const handleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={
                tab.id === selectedTabId
                || (selectedTabId === '' && tab === tabs[0])
                  ? 'is-active'
                  : ''
              }
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
