import classNames from 'classnames';
import { Tab } from '../../types/tab';

type Props = {
  onTabSelected: (tab: Tab) => void;
  tabs: Tab[];
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    onTabSelected,
    tabs,
    selectedTabId,
  } = props;

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      return onTabSelected(tab);
    }

    return null;
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={classNames(
                  { 'is-active': selectedTab.id === tab.id },
                )}
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
