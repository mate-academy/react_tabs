import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type TabChangeCallback = (tab: Tab) => void;

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: TabChangeCallback;
};

const getSelectedTabById = (tabs: Tab[], id: string) => (
  tabs.find(tab => tab.id === id) || tabs[0]
);

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = getSelectedTabById(tabs, selectedTabId);

  const handleTabSelection = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={classNames(
                  { 'is-active': id === selectedTab.id },
                )}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelection(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
