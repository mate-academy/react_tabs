import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (arg: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const getTabById = (id: string) => {
    return tabs.find(tab => tab.id === id);
  };

  let activeTab = selectedTabId;

  if (!getTabById(selectedTabId)) {
    activeTab = tabs[0].id;
  }

  const handleClick = (tab: Tab) => {
    if (tab.id !== activeTab) {
      return onTabSelected(tab);
    }

    return '';
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === activeTab ? 'is-active' : ''}
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
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabById(activeTab)?.content}
      </div>
    </div>
  );
};
