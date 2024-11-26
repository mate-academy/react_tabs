import classNames from 'classnames';
import { type Tab } from '../../App';

export const Tabs: React.FC<{
  tabs: Tab[];
  selectedTabId: Tab['id'];
  onTabSelected: (tabId: Tab['id']) => void;
}> = ({ tabs, selectedTabId, onTabSelected }) => {
  const handleClick = (tabId: Tab['id']) => {
    if (tabId !== selectedTabId) {
      onTabSelected(tabId);
    }
  };

  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === selectedTabId })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab?.content}
      </div>
    </div>
  );
};
