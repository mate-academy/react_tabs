import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  selectedTabContent: string;
  onTabSelected: (id: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  selectedTabContent,
  onTabSelected,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={classNames({ 'is-active': selectedTabId === id })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  onClick={() => {
                    if (selectedTabId !== id) {
                      onTabSelected(tab);
                    }
                  }}
                  href={`"#${selectedTabId}"`}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
