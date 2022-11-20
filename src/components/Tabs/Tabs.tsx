import classNames from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const content = tabs.find(({ id }) => id === selectedTabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': selectedTabId === tab.id })}
              data-cy={tab}
            >
              <button
                type="button"
                onClick={() => onTabSelected(tab)}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy={`#${tab.id}`}
                >
                  {tab.title}
                </a>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy={content}>
        {content}
      </div>
    </div>
  );
};
