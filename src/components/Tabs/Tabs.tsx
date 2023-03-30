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

  const handleTabChange = (tab: Tab) => {
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
                data-cy="Tab"
                key={id}
                className={classNames(
                  'tabs__tab',
                  {
                    'is-active': id === selectedTab.id,
                  },
                )}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  className="tabs__link"
                  onClick={() => handleTabChange(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
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
