import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul>
      {tabs.map((tab) => {
        const { id, title } = tab;

        return (
          <li
            className={cn({ 'is-active': (selectedTabId === id) })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab)}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
