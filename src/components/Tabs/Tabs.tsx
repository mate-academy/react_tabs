import classNames from 'classnames';

import './Tabs.scss';

import Tab from '../../types/Tab';

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

  const selectedTab: Tab = tabs.find(
    tab => tab.id === selectedTabId,
  ) || tabs[0];

  const handleTabSelect = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames(
                'tabs__tab',
                {
                  'is-active': tab.id === selectedTab.id,
                },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                className="tabs__link"
                onClick={() => handleTabSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <div>
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
