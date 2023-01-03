export const Tabs = (props: any) => {
  const {
    tabs, selectedTabId, changeTab, selectedTabContent,
  } = props;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: any) => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                className={selectedTabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
                onClick={() => {
                  changeTab(tab.id, tab.title, tab.content);
                }}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
