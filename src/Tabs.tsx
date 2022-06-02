type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

const Tabs:React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  function changeTab(tab: Tab) {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  }

  return (
    <div>
      <ul className="tabs">
        {tabs.map(tab => (
          <li
            className={`tabs__tab ${tab.id === selectedTabId
              ? 'tabs__tab--active' : ''}`}
            key={tab.id}
            onClick={() => changeTab(tab)}
            aria-hidden="true"
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="content">
        <p className="content__text" data-cy="tab-content">
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
