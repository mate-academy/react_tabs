import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type TabChangeCallback = (tab: Tab) => void;

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: TabChangeCallback;
};

const refineSelectedId = (tabs: Tab[], selectedTabId: string) => {
  const isValidSelectedId = tabs.some(tab => tab.id === selectedTabId);

  if (!isValidSelectedId) {
    return tabs[0].id;
  }

  return selectedTabId;
};

const getSelectedTabContent = (tabs: Tab[], selectedId: string) => {
  const selectedTab = tabs.find(tab => tab.id === selectedId);

  return selectedTab && selectedTab.content;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedId = refineSelectedId(tabs, selectedTabId);

  const handleTabSelection = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
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
                  { 'is-active': id === selectedId },
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
        {getSelectedTabContent(tabs, selectedId)}
      </div>
    </div>
  );
};
