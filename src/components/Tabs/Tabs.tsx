import classNames from 'classnames';
import { TabsInterface } from '../../Types/TabsInterface';

type Props = {
  tabs: TabsInterface[];
  selectedTabId: TabsInterface['id'];
  setOnTabSelected: (tab: TabsInterface) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  setOnTabSelected,
}) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = selectedTabId === tab.id;

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
      {tabs.map(tab => {
        const isSelected = selectedTabId === tab.id;

        if (isSelected) {
          return (
            <div
              className="block"
              data-cy="tab-content"
              key={tab.id}
            >
              {tab.content}
            </div>
          );
        }

        return undefined;
      })}
    </div>
  );
};
