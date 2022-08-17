import classNames from 'classnames';
import { TabsInterface } from '../../Types/TabsInterface';

type Props = {
  tabs: TabsInterface[];
  onTabSelected: TabsInterface;
  setOnTabSelected: (tab: TabsInterface) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  setOnTabSelected,
}) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = onTabSelected.id === tab.id;

            return (
              <li
                className={classNames({ 'is-active': isSelected })}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => setOnTabSelected(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {onTabSelected.content}
      </div>
    </>
  );
};
