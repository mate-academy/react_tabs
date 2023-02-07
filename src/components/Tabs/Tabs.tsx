import classNames from 'classnames';
import { Tab } from '../../react-app-env';

interface Props {
  tabs: Array<Tab>
  selectedTabId: string
  onTabSelected : (value: Tab) => void,
}

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: Props) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleSelect = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                { 'is-active': selectedTab.id === tab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};
