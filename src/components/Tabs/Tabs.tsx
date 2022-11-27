import classNames from 'classnames';
import { Props } from '../../types/Props';
import { Tab } from '../../types/Tab';

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: Tab,
  ) => {
    if (event.currentTarget.id === selectedTabId) {
      return;
    }

    onTabSelected(tab);
  };

  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': selectedTabId === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                id={tab.id}
                onClick={(event) => {
                  handleClick(event, tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {selectedTab && (
        <div className="block" data-cy="tab-content">
          {selectedTab.content}
        </div>
      )}

    </div>
  );
};

Tabs.defaultProps = {
  selectedTabId: 'tab-1',
};
