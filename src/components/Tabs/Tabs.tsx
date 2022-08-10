import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Prors = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: React.Dispatch<React.SetStateAction<{
    id: string;
    title: string;
    content: string;
  }>>,
};

export const Tabs: React.FC<Prors> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handlerTab = (tab: Tab) => {
    if (tab !== selectedTab) {
      onTabSelected(tab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={
                  classNames({ 'is-active': tab === selectedTab })
                }
              >
                <a href={`#${tab.id}`} onClick={() => handlerTab(tab)}>
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
