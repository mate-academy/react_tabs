import className from "classnames";
import { Tab } from "../../Tab";

type Props = {
  tabs: Tab[];
  active: Tab;
  selected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, active, selected }) => {
  const handleTab = (tab: Tab) => {
    if (active.id !== tab.id) {
      selected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                className={className({ "is-active": active.id === tab.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {active.content}
      </div>
    </div>
  );
};
