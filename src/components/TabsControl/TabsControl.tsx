import { Tab } from '../../types';

interface Props {
  tabs: Tab[];
  selectTab: (tab: string) => void;
}

export const TabsControl: React.FC<Props> = ({ tabs, selectTab }) => {
  return (
    <>
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            className="tabs__item"
            key={tab.id}
          >
            <button
              type="button"
              className="tabs__button"
              onClick={() => selectTab(tab.id)}
            >
              <p className="tabs__title">
                {tab.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
