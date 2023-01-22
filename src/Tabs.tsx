import classNames from 'classnames';
import { Tab } from './types/tab';

type Props = {
  tabs: Tab[];
  // selectedTab: Tab;
  selectedTabId: string;
  handleTabSelected: (chosenTab: Tab) => void;
};

const Tabs: React.FC<Props> = ({
  tabs,
  // selectedTab,
  selectedTabId,
  handleTabSelected,
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
                  data-cy="TabLink"
                  onClick={() => {
                    handleTabSelected(tab);
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
        {/* {selectedTab.content} */}
      </div>
    </div>
  );
};

export default Tabs;
