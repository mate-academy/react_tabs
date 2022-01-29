import './TabsList.scss';
import classNames from 'classnames';

type Props = {
  ourTabs: Tab[],
  selectedTab: Tab,
  onTabChange: (tab: Tab) => void,
};

export const TabsList: React.FC<Props> = ({ ourTabs, selectedTab, onTabChange }) => (
  <div>
    <ul className="tab__list">
      {ourTabs.map(tab => (
        <li key={tab.id} className="tab__item">
          <button
            type="button"
            onClick={() => onTabChange(tab)}
            className={classNames('button', { 'button-active': tab.id === selectedTab.id })}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <div className="content">{selectedTab.content}</div>
  </div>
);
