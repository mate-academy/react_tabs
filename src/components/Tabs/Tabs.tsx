/* eslint-disable max-len */
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  selectedTabId : string;
  tabs : Tab[];
  onTabSelected : (tab : Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  selectedTabId,
  tabs,
  onTabSelected,
}) => {
  const selectTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  const handleTabSelected = (tab : Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTabId })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="tab-content"
                onClick={() => handleTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab.content}
      </div>
    </div>
  );
};
