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
            className="Tabs__button"
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
