import className from 'classnames';
import { Tab } from '../../Tab';

type Props = {
  tabs: Tab[];
  content: string;
  onSelectTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, content, onSelectTab }) => {
  const onSelectedTab = (tab: Tab) => {
    onSelectTab(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                className={className({ 'is-active': content === tab.content })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onSelectedTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
