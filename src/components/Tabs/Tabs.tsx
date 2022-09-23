import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
  selectedTabId: string;
  onTabSelected: (value:Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  const handleClick = (tab: Tab) => (
    tab.id !== selectedTabId && onTabSelected(tab)
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames(
                {
                  'is-active': tab.id === selectedTab.id,
                },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={() => handleClick(tab)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
