import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Prop {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected : (tab: Tab) => void,
}

export const Tabs: React.FC<Prop> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const chosenTab = tabs.find(
    tab => tab.id === selectedTabId,
  ) || tabs[0];

  return (
    <div data-cy="TabsComponent">

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (

              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === chosenTab.id,
                })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== chosenTab.id) {
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
        {chosenTab.content}
      </div>
    </div>
  );
};
