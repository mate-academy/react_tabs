import classNames from 'classnames';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (chosenTab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab: Tab = tabs
    .find(({ id }) => id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={classNames({
                  'is-active': id === currentTab.id,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== selectedTabId) {
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
        {currentTab.content}
      </div>
    </div>
  );
};
