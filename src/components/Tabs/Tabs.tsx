import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            const currentTabSelected = selectedTabId === tab.id;
            const isActive = currentTabSelected
            || (!currentTab && !index)

            const changeTab = () => {
              if (!(currentTabSelected)) {
                onTabSelected(tab);
              }
            }

            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': isActive,
                })}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={changeTab}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content}
      </div>
    </div>
  );
};
