import classNames from 'classnames';
import { Tab } from '../Tab';
import { TabType } from '../../types/Tab';

type Props = {
  tabs: TabType[],
  selectedTabId: number,
  onTabSelected: (tabId: number) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab, index) => {
          const { id, title } = tab;
          const tabId = index + 1;

          return (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === selectedTabId,
              })}
            >
              <Tab
                tabId={tabId}
                title={title}
                onTabSelected={onTabSelected}
              />
            </li>
          );
        })}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs[selectedTabId - 1].content}
    </div>
  </div>
);
