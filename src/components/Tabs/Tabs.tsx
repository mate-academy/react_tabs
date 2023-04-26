import classNames from 'classnames';
import { Tab } from '../../react-app-env';

interface Props {
  tabs: Tab[],
  onTabSelected: (ev: React.MouseEvent<HTMLAnchorElement>) => void,
  selectedTab: Tab,
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTab }) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({
              'is-active': tab.id === selectedTab.id,
            })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              id={tab.id}
              onClick={onTabSelected}
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
  </>
);
