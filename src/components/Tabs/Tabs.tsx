import './Tabs.scss';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="tabs__tab">
          <button
            type="button"
            className={classNames(
              'tabs__link',
              { 'tabs__link--selected': selectedTabId === tab.id },
            )}
            onClick={() => {
              if (tab.id !== selectedTabId) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
