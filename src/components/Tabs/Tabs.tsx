import classNames from 'classnames';
import { findTab } from '../../helpers';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected(tab: Tab): void,
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    onTabSelected,
    selectedTabId,
  } = props;

  const activeTab = findTab(tabs, selectedTabId);

  const handleClick = (isTabActive: boolean, tab: Tab): void => {
    if (!isTabActive) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tab.id === activeTab.id;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': isSelected })}
                key={tab.id}
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={() => handleClick(isSelected, tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
