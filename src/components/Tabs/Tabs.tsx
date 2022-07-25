import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  selectedTab: Tab,
  tabs: Tab[],
  handleSelectedClick: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  selectedTab,
  tabs,
  handleSelectedClick,
}) => {
  return (
    <ul className="Tabs__list">
      {tabs.map((tab: Tab) => (
        <li className="Tabs__item">
          <button
            className={classNames('Tabs__button', {
              'Tabs__button-active': tab.id === selectedTab.id,
            })}
            key={tab.id}
            type="button"
            onClick={() => handleSelectedClick(tab)}
          >
            {tab.title}
          </button>

          {selectedTab === tab && (
            <span
              className="Tabs__content"
              data-cy="tab-content"
            >
              {tab.content}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
