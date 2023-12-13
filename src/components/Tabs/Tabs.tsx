import classNames from 'classnames';

import { Tab } from '../../types/tabs';

type Props = {
  selectedTabId: string;
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  selectedTabId,
  tabs,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  const handleTabClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
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
                className={classNames({
                  'is-active': selectedTab.id === tab.id,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(tab)}
                >
                  {title}
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
