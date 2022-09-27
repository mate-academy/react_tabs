import classNames from 'classnames';
import { getTabByID } from '../../helpers/getTabByID';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const { id: validSelectedTabId, content } = getTabByID(tabs, selectedTabId);

  const handleTabSelect = (id: string) => {
    if (id !== validSelectedTabId) {
      onTabSelected((getTabByID(tabs, id)));
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={classNames(
                { 'is-active': id === validSelectedTabId },
              )}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelect(id)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
