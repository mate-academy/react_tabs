import { FC } from 'react';
import cn from 'classnames';
import { Tab } from './Types/Tab';
import { getSelectedTabById } from '../../helper';

interface Props {
  tabs: Tab[]
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
}

export const Tabs: FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const selectedTab = getSelectedTabById(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = id === selectedTab.id;

            return (
              <li
                key={id}
                className={cn({
                  'is-active': isSelected,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isSelected) {
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

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
