import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
  selectedTab: Tab
  tabSelectHandler: (clickedTab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  tabSelectHandler: onTabSelected,
}) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTab.id,
              })}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  onTabSelected(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
