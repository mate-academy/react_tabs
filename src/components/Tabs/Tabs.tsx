import classNames from 'classnames';
import { TabsInterface } from '../../Types/TabsInterface';

type Props = {
  tabs: TabsInterface[];
  selectedTab: TabsInterface;
  setSelectedTab: (tab: TabsInterface) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = selectedTab.id === tab.id;

            return (
              <li
                className={classNames({ 'is-active': isSelected })}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => setSelectedTab(tab)}
                >
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
