import './Tabs.scss';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="tabs__tab">
          <a
            href="/"
            className={classNames('tabs__link', { 'tabs__link--selected': selectedTabId === tab.id })}
            onClick={(event) => {
              event.preventDefault();
              onTabSelected(tab.id);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
