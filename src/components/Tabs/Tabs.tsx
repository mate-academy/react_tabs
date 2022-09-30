import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabChose = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                className={classNames(
                  { 'is-active': tab.id === selectedTab.id },
                )}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabChose(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </>
  );
};
