import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
  selectedTab?: Tab;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
  selectedTab,
}) => {
  // const selectedTab = tabs.find(({ id }: Tab): boolean => id === selectedTabId);
  const notSelected = tabs.every(
    ({ id }: Tab): boolean => id !== selectedTabId,
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            const firstTab = index === 0;
            const isSelectedTab = tab.id === selectedTabId;
            const isActiveTab = isSelectedTab
              || (notSelected && firstTab);
            const { id, title } = tab;

            return (
              <li
                className={classNames({
                  'is-active': selectedTab?.id,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isActiveTab) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};
