import classNames from 'classnames';
import { getSelectedTabById } from '../../helper';
import { Tab } from '../../types/Tab';

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = getSelectedTabById(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isIdCorrect = tab.id === selectedTab.id;

            return (
              <li
                key={tab.id}
                className={classNames({ 'is-active': isIdCorrect })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isIdCorrect) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        key={selectedTab.id}
        data-cy="TabContent"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};
