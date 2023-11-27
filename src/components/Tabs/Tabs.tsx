import classNames from 'classnames';
import Tab from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected } : Props) => {
  const selectHandler = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={
                classNames({
                  'is-active': tab.id === selectedTabId
                || (tabs.every(t => t.id !== selectedTabId)
                && tab.id === tabs[0].id),
                })
              }
              data-cy="Tab"
            >
              <a onClick={() => selectHandler(tab)} href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
