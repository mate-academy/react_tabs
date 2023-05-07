import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  onTabSelect: (tab: Tab) => void;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelect, selectedTabId }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = (tab: Tab) => {
    if (tab.id !== currentTab.id) {
      onTabSelect(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                {
                  'is-active': tab.title === currentTab.title,
                },
              )}
            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={() => {
                  handleTabClick(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => (
          currentTab.title === tab.title
        ))?.content}
      </div>
    </div>
  );
};
