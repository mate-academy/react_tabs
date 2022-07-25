import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames({ 'is-active': tab.id === selectedTab.id })}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => (
                onTabSelected(tab)
              )}
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
