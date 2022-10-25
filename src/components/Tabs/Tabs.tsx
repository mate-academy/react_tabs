import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (id: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
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
  );
};
