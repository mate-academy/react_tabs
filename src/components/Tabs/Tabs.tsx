import classNames from 'classnames';
import { TabsType } from '../../types/TabsType';

type Props = {
  tabs: TabsType[];
  selectedTabId: string;
  onTabSelected: (tab: TabsType) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const onClickTab = (tab: TabsType) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                id={tab.id}
                key={tab.id}
                className={classNames(
                  { 'is-active': tab.id === selectedTabId },
                )}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onClickTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })
          }
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
