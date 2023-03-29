import classNames from 'classnames';
import { getTabById } from '../../helpers';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: Props) => {
  const selectedTab = getTabById(tabs, selectedTabId);

  const handleClick = (isTabSelected: boolean, tab: Tab): void => {
    if (!isTabSelected) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isTabSelected = id === selectedTab.id;

            return (
              <li
                className={classNames(
                  {
                    'is-active': isTabSelected,
                  },
                )}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(isTabSelected, tab)}
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
    </>
  );
};
