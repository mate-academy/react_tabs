import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tabs';
import { findId } from '../../helpers/findIdHelper';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;
  const selectedTab = findId(tabs, selectedTabId);

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
