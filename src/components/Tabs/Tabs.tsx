import classNames from 'classnames';
import 'bulma/css/bulma.css';
import Tab, { findSelectedTab } from '../../utils/function';

type Props = {
  tabs: Tab[],
  selectedTabId: string;
  onTabSelected: CallableFunction;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = findSelectedTab(selectedTabId, tabs);

  const handleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
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
              className={classNames('',
                { 'is-active': selectedTab.id === tab.id })}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
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
