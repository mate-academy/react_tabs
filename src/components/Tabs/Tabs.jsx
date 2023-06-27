import classNames from 'classnames';

function getCorrectTabId(tabsList, tabId) {
  const findedTab = tabsList.find(tab => tab.id === tabId);

  return findedTab ? tabId : tabsList[0].id;
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const correctTabId = getCorrectTabId(tabs, selectedTabId);
  const selectedTabData = tabs.find(tab => tab.id === correctTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': correctTabId === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => {
                  if (tab.id !== correctTabId) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabData.content}
      </div>
    </div>
  );
};
