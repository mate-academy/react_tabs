import classNames from 'classnames';
import { Tab } from '../../Types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const getCurrentTab = () => {
    const currentTab = tabs.find((tab) => tab.id === selectedTabId);

    return currentTab || tabs[0];
  };

  const selectTab = (clickedTab: Tab) => {
    if (clickedTab.id !== selectedTabId) {
      onTabSelected(clickedTab);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === getCurrentTab().id,
              })}
            >
              <a onClick={() => selectTab(tab)} href={`#${tab.id}`}>
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {getCurrentTab().content}
      </div>
    </>
  );
};
