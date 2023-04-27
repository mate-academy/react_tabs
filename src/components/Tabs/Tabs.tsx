import { Tab } from '../../types/Tab';

type Props = {
  selectedTabId : string;
  tabs : Tab[];
  onTabSelected : (tab : Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  selectedTabId: selectTabId,
  tabs,
  onTabSelected,
}) => {
  const selectTab = tabs.find((tab) => tab.id === selectTabId);

  const handleTabSelected = (tab : Tab) => {
    if (tab.id !== selectTabId) {
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
              className={tab.id === selectTabId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="tab-content"
                onClick={() => handleTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab && selectTab.content}
      </div>
    </div>
  );
};
