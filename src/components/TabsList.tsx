import './TabsList.scss';

type Props = {
  ourTabs: Tab[],
  selectedTab: Tab,
  onChange: (tab: Tab) => void,
};

export const TabsList: React.FC<Props> = ({ ourTabs, selectedTab, onChange }) => {
  return (
    <ul className="tab__list">
      {ourTabs.map(tab => (
        <li key={tab.id} className="tab__item">
          <button
            type="button"
            onClick={() => onChange(tab)}
            className={selectedTab.id === tab.id ? 'selected__button button' : 'button'}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
