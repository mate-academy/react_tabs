import classNames from 'classnames';
import { type Tab } from '../../App';

export const Tabs: React.FC<{
  tabs: Tab[];
  selectedTabId: Tab['id'];
  onTabSelected: (tab: Tab) => void;
}> = ({ tabs, selectedTabId, onTabSelected }) => {
  const tabIds: Tab['id'][] = tabs.map((tab: Tab) => tab.id);

  const doesCurrentTabExists = tabIds.includes(selectedTabId);

  let currentTabId = selectedTabId;

  if (!doesCurrentTabExists) {
    currentTabId = tabs[0].id;
  }

  const clickHandler = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const currentTabContent = tabs.filter(
    (tab: Tab) => tab.id === currentTabId,
  )[0]?.content;

  const tabClassName = (tab: Tab) => {
    return classNames({
      'is-active': tab.id === currentTabId,
    });
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li key={tab.id} data-cy="Tab" className={tabClassName(tab)}>
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => clickHandler(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTabContent}
      </div>
    </div>
  );
};
