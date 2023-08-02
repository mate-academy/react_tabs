import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { findTabById as getTabById } from '../../helper/findTabById';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected(tab: Tab): void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const findedSelectedTab = getTabById(tabs, selectedTabId);

  const handelSelectTabId = (tab: Tab) => {
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
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': findedSelectedTab.id === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handelSelectTabId(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findedSelectedTab.content}
      </div>
    </div>
  );
};
