import classNames from 'classnames';
import { Tab } from './types/tab';

type Props = {
  tabs: Tab[];
  currentTab: Tab;
  selectedTabId: string;
  onTabSelected: (chosenTab: Tab) => void;
};

const Tabs: React.FC<Props> = ({
  tabs,
  currentTab,
  selectedTabId,
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
                className={classNames({ 'is-active': id === selectedTabId })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  onClick={() => {
                    onTabSelected(tab);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {currentTab.content}
      </div>
    </div>
  );
};

export default Tabs;
