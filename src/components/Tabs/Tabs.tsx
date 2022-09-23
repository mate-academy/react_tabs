/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames('',
                {
                  'is-active': tab.id === selectedTab.id,
                })}
              data-cy="Tab"
              onClick={() => handleTabClick(tab)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs
          .filter((tab) => tab.id === selectedTabId)
          .map(({ content }) => content)}
      </div>
    </div>
  );
};
