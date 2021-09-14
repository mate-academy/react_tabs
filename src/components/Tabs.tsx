type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onChangeTab: (currentState: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTab, onChangeTab } = props;

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {tabs.map(tab => {
            return (
              <button
                className={selectedTab.id === tab.id
                  ? 'nav-link active'
                  : 'nav-link'}
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                key={tab.id}
                onClick={() => onChangeTab(tab)}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
