import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({
  selectedTabId,
  onTabSelected,
  tabs,
}) => {
  const selectedTab = tabs.find(
    tab => tab.id === selectedTabId,
  ) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': tab.id === selectedTab.id,
              })}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
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
