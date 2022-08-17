import { FC } from 'react';
import classNames from 'classnames';
import Tab from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<Props> = (props) => {
  const {
    tabs,
    onTabSelected,
    selectedTabId,
  } = props;
  const selectTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames({ 'is-active': selectTab.id === id })}
              >
                <a
                  href={`#${id}`}
                  onClick={() => {
                    if (selectedTabId !== tab.id) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectTab.content}
      </div>
    </div>
  );
};
