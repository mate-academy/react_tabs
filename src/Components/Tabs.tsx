import classNames from 'classnames';
import './Tabs.scss';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab [],
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          className={classNames(
            'tabs__item',
            { 'tabs__item--active': selectedTab === tab },
          )}
          onClick={() => onTabSelected(tab)}
        >
          <h3 className="tabs__title">
            {tab.title}
          </h3>
        </button>
      ))}
      <div className="tabs__content">
        <p className="tabs__text">
          {selectedTab.content}
        </p>
      </div>
    </div>
  );
};
