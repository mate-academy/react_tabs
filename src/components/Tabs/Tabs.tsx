import classNames from 'classnames';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  const hanldeTabSelected = (
    tab: Tab,
    event: React.SyntheticEvent<Element, Event>,
  ) => {
    event.preventDefault();

    if (tab.id === selectedTab.id) {
      onTabSelected(selectedTab);
    }

    return onTabSelected(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': selectedTab === tab,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => hanldeTabSelected(tab, event)}
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
