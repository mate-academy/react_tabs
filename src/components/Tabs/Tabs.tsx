import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  handleSelect: (tab: Tab) => void;
};
export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  handleSelect,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={classNames(
                  selectedTabId === id && 'is-active',
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleSelect(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="block"
        data-cy="TabContent"
      >
        {tabs.find(tab => selectedTabId === tab.id)?.content}
      </div>
    </div>
  );
};
